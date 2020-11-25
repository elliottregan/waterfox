import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export default function useUnitsAsync() {
  const [units, setUnits] = useState('');

  useEffect(
    () => {
      const logStorageChange = (changes: any, area: string) => {
        if (area === 'local' && changes.units) {
          setUnits(changes.units.newValue);
        }
      };

      async function getUnit() {
        const { units } = await browser.storage.local.get('units');
        setUnits(units);
      }

      browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
      getUnit();

      return () => {
        browser.storage.onChanged.removeListener(logStorageChange);
      };
    }
  );

  return units;

}
