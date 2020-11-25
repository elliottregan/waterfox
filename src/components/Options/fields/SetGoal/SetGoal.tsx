import { browser } from 'webextension-polyfill-ts';
import React, { useState, useEffect } from "react";


const useGoalAsync = () => {
    const [goal, setGoal] = useState('');
  
    useEffect(
      () => {
        const logStorageChange = (changes: any, area: string) => {
          if (area === 'local' && changes.goal) {
            setGoal(changes.goal.newValue)
          }
        }
        
        async function getGoal() {
          const { goal } = await browser.storage.local.get('goal');
          setGoal(goal)
        }
    
        browser.storage.onChanged.addListener((changes, area) => logStorageChange(changes, area));
        getGoal();
  
        return () => {
          browser.storage.onChanged.removeListener(logStorageChange);
        };
      },
    );
  
    return goal;

}
  

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
