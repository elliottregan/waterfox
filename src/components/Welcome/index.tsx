import React from 'react';
import ReactDOM from 'react-dom';
import { browser } from 'webextension-polyfill-ts';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));

const baseState = {
  dateCreated: new Date(),
  amount: 0,
  goal: 64,
};

getInitialState()

async function getInitialState() {
  const { dateCreated } = await browser.storage.local.get('dateCreated');
  if (!dateCreated || isYesterday(new Date(dateCreated))) {
    browser.storage.local.set(baseState);
  }
}

function isYesterday(date: Date): Boolean {
  const yesterday = new Date().getDate() - 1;
  return yesterday === date.getDate();
}