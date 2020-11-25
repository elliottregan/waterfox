import React from "react";
import Total from '../GetTotal/GetTotal';
import Goal from '../GetGoal/GetGoal';

import './Popup.scss';

function Popup() {
  return (
    <div className="Popup">
      <div className="percent">
        <Total unit="percent" />
      </div>
      <div className="total-units"><Total /> of <Goal /></div>
    </div>
  );
}

export default Popup;
