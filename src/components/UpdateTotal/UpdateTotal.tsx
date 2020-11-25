import { browser } from 'webextension-polyfill-ts';
import React, { useState } from "react";

import './UpdateTotal.scss'

const oz = 8;

function UpdateAmount() {
  const [, setAmount] = useState(0);
    
  async function increaseAmount(increase:number) {
    const { amount } = await browser.storage.local.get('amount');
      const newAmount = amount + increase * oz
      setAmount(newAmount)
      await browser.storage.local.set({amount: newAmount});
  }
  
  async function decreaseAmount(increase:number) {
    const { amount } = await browser.storage.local.get('amount');
      const newAmount = amount - increase * oz
      setAmount(newAmount)
      await browser.storage.local.set({amount: newAmount});
  }
  
  return (
    <div>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => increaseAmount(1)}
      >
        + Drink a glass
      </button>

      <button
        type="button"
        className="btn btn-link"
        onClick={() => decreaseAmount(1)}
      >
        - Remove
      </button>
    </div>
  );
}

export default UpdateAmount;
