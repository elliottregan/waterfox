import React from 'react';
import ReactDOM from 'react-dom';
import { browser } from 'webextension-polyfill-ts';
import Welcome from './Welcome';
import Background from '../Background/Background';

ReactDOM.render(<Welcome />, document.getElementById('root'));
ReactDOM.render(<Background />, document.getElementById('background'));

interface baseStateType {
  dateCreated: Date,
  amount: number,
  goal: number,
  units: 'metric' | 'imperial'
  options: {
    goal: number,
    units: 'metric' | 'imperial'
  },
}

const baseState:baseStateType = {
  dateCreated: new Date(),
  amount: 0,
  goal: 64,
  units: 'imperial',
  options: {
    goal: 64,
    units: 'imperial',
  },
};

getInitialState()

async function getInitialState() {
  const storageState = await browser.storage.local.get();
  if (!expectedSchema(storageState) || !storageState.dateCreated || isYesterday(new Date(storageState.dateCreated))) {
    await browser.storage.local.set({...baseState});
    console.log(await browser.storage.local.get())
  }
}

// Really basic schema check. 
function expectedSchema(state:any, schema:baseStateType = baseState) {
  return Object.keys(state).length === Object.keys(schema).length
}

function isYesterday(date: Date): Boolean {
  const yesterday = new Date().getDate() - 1;
  return yesterday === date.getDate();
}