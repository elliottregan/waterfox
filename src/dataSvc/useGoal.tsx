import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export default function useGoalAsync() {
  const [goal, setGoal] = useState(0);

  const getAmount = async () => {
    const { options } = await browser.storage.local.get('options');
    setGoal(Number(options.goal));
  }

  const logStorageChange = (changes: any, area: string) => {
    if (area === 'local' && changes.goal) {
      setGoal(Number(changes.options.goal.newValue));
    }
  };
  
  useEffect(
    () => {
      browser.storage.onChanged.addListener(logStorageChange);
      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  getAmount();

  return goal;

}
