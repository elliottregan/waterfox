import { browser } from 'webextension-polyfill-ts';
import React, { useState, useEffect, useRef } from "react";
import AnimateNumber from '../AnimateNumber/AnimateNumber';

function Goal() {
  return (
    <ShowGoal />
  );
}

const useIsMounted = () => {
  const isMounted = useRef<Boolean>(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, []);
  return isMounted;
};

const useAmountAsync = (componentIsMounted: React.MutableRefObject<Boolean>) => {
  const [goal, setGoal] = useState(0);

  useEffect(
    () => {
      const logStorageChange = (changes: any, area: string) => {
        if (area === 'local' && changes.goal) {
          setGoal(changes.goal.newValue)
        }
      }
      
      async function getAmount() {
        const value = await browser.storage.local.get('goal');
        if (componentIsMounted.current) {
          setGoal(value.goal)
        }
      }
  
      browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
      getAmount();

      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    },
  );

  return goal;

}

function ShowGoal() {
  const componentIsMounted = useIsMounted();
  const goal = useAmountAsync(componentIsMounted);
  return (
    <span><AnimateNumber value={goal} duration={300} /></span>
  )
}

export default Goal;
