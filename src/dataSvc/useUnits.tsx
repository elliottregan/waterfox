import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export default function useUnitsAsync() {
  const [units, setUnits] = useState(0);

  useEffect(
    () => {
      const logStorageChange = (changes: any, area: string) => {
        if (area === 'local' && changes.units) {
          setUnits(changes.units.newValue);
        }
      };

      async function getAmount() {
        const value = await browser.storage.local.get('units');
        setUnits(Number(value.units));
      }

      browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
      getAmount();

      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  return units;

}
