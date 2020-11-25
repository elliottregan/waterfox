import { browser } from 'webextension-polyfill-ts';
import React, { useState, useEffect } from "react";

export default function useAmountAsync(componentIsMounted: React.MutableRefObject<Boolean>) {
  const [amount, setAmount] = useState(0);

  useEffect(
    () => {
      const logStorageChange = (changes: any, area: string) => {
        if (area === 'local' && changes.amount) {
          setAmount(changes.amount.newValue);
        }
      };

      async function getAmount() {
        const value = await browser.storage.local.get('amount');
        if (componentIsMounted.current) {
          setAmount(value.amount);
        }
      }

      browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
      getAmount();

      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  return amount;

}
