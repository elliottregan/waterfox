import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export default function useUnitsAsync() {
  const [units, setUnits] = useState('');

  const logStorageChange = (changes: any, area: string) => {
    if (area === 'local' && changes.options.newValue.units !== changes.options.oldValue.units) {
      setUnits(changes.options.newValue.units);
    }
  };

  async function getUnit() {
    const { options } = await browser.storage.local.get('options');
    setUnits(options.units);
  }
  
  useEffect(
    () => {
      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  browser.storage.onChanged.addListener(logStorageChange);
  getUnit();

  return units;

}
