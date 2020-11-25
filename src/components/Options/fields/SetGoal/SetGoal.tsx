import { browser } from 'webextension-polyfill-ts';
import React, { useState } from "react";
import { useGoalAsync } from './useGoalAsync';

function UpdateAmount() {
  const [, setGoalValue] = useState('64');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setGoal(e.target.value);
  }

  async function setGoal(goal: React.SetStateAction<string>) {
    await browser.storage.local.set({goal: goal});
    setGoalValue(goal)
  }

  const goal = useGoalAsync();
  
  return (
    <div>
    <label htmlFor="setGoal">Set Goal:</label>
    <input
        type="number"
        name="setGoal"
        min="0"
        step="8"
        id="setGoal"
        value={goal}
        onChange={(e) => handleInputChange(e)}
    />oz
    </div>
  );
}

export default UpdateAmount;
