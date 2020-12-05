import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export default function useAmountAsync() {
  const [amount, setAmount] = useState(0);

  const  logStorageChange = async (changes: any, area: string) => {
    console.log('change?', changes.amount)
    if (area === 'local' && changes.amount.newValue !== changes.amount.oldValue) {
      console.log('change', changes.amount)
      setAmount(changes.amount.newValue);
      await browser.storage.local.set({amount: changes.amount.newValue});
    }
  };

  async function getAmount() {
    const { amount } = await browser.storage.local.get('amount');
    console.log('get amount', amount)
    setAmount(amount);
  }

  getAmount();

  useEffect(
    () => {
      browser.storage.onChanged.addListener(logStorageChange);
      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  return amount;

}
