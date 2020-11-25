import { browser } from 'webextension-polyfill-ts';
import { useState, useEffect } from "react";

export function useGoalAsync() {
  const [goal, setGoal] = useState('');

  function onStorageChange({ goal }: any, area: string) {
    if (area === 'local' && goal) {
      setGoal(goal.newValue);
    }
  }

  async function getGoal() {
    const { goal } = await browser.storage.local.get('goal');
    setGoal(goal);
  }

  useEffect(
    () => {
      browser.storage.onChanged.addListener((changes, area) => onStorageChange(changes, area));
      getGoal();

      return () => {
        browser.storage.onChanged.removeListener(onStorageChange);
      };
    }
  );

  return goal;

}
