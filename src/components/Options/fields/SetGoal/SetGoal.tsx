import { browser } from 'webextension-polyfill-ts';
import React, { useState } from "react";
import { useGoalAsync } from './useGoalAsync';
import GetUnits from '../../../GetUnits/GetUnits';

function UpdateAmount() {
  const [, setGoalValue] = useState('0');

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
    <div className="field">
      <label htmlFor="setGoal">Set Goal:</label>
      <input
          className="input"
          type="number"
          name="setGoal"
          min="0"
          step="8"
          id="setGoal"
          value={goal}
          onChange={(e) => handleInputChange(e)}
      />
      <span className="field__units"><GetUnits /></span>
    </div>
  );
}

export default UpdateAmount;
