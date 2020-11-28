import { browser } from 'webextension-polyfill-ts';
import React, { useState } from "react";
import { useUnits } from '../../../../dataSvc';

function UpdateAmount() {
  const [, setUnitsValue] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setUnits(e.target.value);
  }

  async function setUnits(units: React.SetStateAction<string>) {
    const { options } = await browser.storage.local.get('options');
    await browser.storage.local.set({ options: Object.assign(options, { units }) });
    setUnitsValue(units)
  }

  const units = useUnits();
  
  return (
    <div className="field">
      <label htmlFor="setUnits">Set Units:</label>
      <select className="input" value={units} name="setUnits" id="setUnits" onChange={(e) => handleInputChange(e)}>
        <option value="imperial" >Imperial (oz)</option>
        <option value="metric">Metric (l)</option>
      </select>
    </div>
  );
}

export default UpdateAmount;
