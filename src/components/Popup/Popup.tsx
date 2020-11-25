import React from "react";
import GetTotal from '../GetTotal/GetTotal';
import SettingsLink from '../navigation/SettingsLink/SettingsLink';

import './Popup.scss';

function Popup() {
  return (
    <div className="Popup mt-5 mx-4 text-center">
      Popup!
      <div className="mb-3">
        <GetTotal />
        <SettingsLink />
      </div>
    </div>
  );
}

export default Popup;
