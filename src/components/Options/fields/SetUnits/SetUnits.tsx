import { browser } from 'webextension-polyfill-ts';
import React, { useState } from "react";
import { useUnits } from '../../../../dataSvc';

function UpdateAmount() {
  const [, setUnitsValue] = useState('64');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUnits(e.target.value);
  }

  async function setUnits(units: React.SetStateAction<string>) {
    await browser.storage.local.set({units: units});
    setUnitsValue(units)
  }

  const units = useUnits();
  
  return (
    <div>
    <label htmlFor="setUnits">Set Units:</label>
    <input
        type="number"
        name="setUnits"
        min="0"
        step="8"
        id="setUnits"
        value={units}
        onChange={(e) => handleInputChange(e)}
    />oz
    </div>
  );
}

export default UpdateAmount;
