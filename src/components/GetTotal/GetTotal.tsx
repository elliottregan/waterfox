import { browser } from 'webextension-polyfill-ts';
import React, { useState, useEffect, useRef } from "react";

function Popup() {
  return (
    <ShowAmount />
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
  const [amount, setAmount] = useState(0);

  useEffect(
    () => {
      const logStorageChange = (changes: any, area: string) => {
        if (area === 'local' && changes.amount) {
          setAmount(changes.amount.newValue)
        }
      }
      
      async function getAmount() {
        const value = await browser.storage.local.get('amount');
        if (componentIsMounted.current) {
          setAmount(value.amount)
        }
      }
  
      browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
      getAmount();

      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    },
  );

  return amount;

}

function ShowAmount() {
  const componentIsMounted = useIsMounted();
  const amount = useAmountAsync(componentIsMounted);
  return (
    <span>{`${amount}`}</span>
  )
}

export default Popup;
