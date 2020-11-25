import { browser } from 'webextension-polyfill-ts';
import React from "react";

import './SettingsLink.scss';

function SettingsButton() {
  return (
    <button
      type="button"
      className="settings-button btn btn-link btn-sm"
      onClick={e => {
        e.preventDefault();
        browser.runtime.openOptionsPage();
      }}
    >
      Settings
    </button>
  );
}

export default SettingsButton;
