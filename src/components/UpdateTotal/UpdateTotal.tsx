import { browser } from 'webextension-polyfill-ts';
import React from "react";
import { PlusCircle } from 'react-feather';

import './UpdateTotal.scss'

function UpdateAmount() {
    
  async function increaseAmount(increase:number = 1) {
    const { amount } = await browser.storage.local.get('amount');
    const newAmount = amount + increase
    await browser.storage.local.set({amount: newAmount});
  }
  
  async function decreaseAmount(increase:number = 1) {
    const { amount } = await browser.storage.local.get('amount');
    const newAmount = amount - increase
    await browser.storage.local.set({amount: newAmount});
  }
  
  return (
    <div>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => increaseAmount(8)}
      >
        <PlusCircle /> <span>Drink a glass</span>
      </button>

      <button
        type="button"
        className="btn btn-link"
        onClick={() => decreaseAmount(8)}
      >
        <span>Undo</span>
      </button>
    </div>
  );
}

export default UpdateAmount;
