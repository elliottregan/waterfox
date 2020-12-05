import React from 'react';
import SetGoal from './fields/SetGoal/SetGoal'
// import SetUnits from './fields/SetUnits/SetUnits'

import './Options.scss';

function Options() {
  return (
    <div className="Options container-fluid my-5">
      <h1>Settings</h1>
      {/* <SetUnits /> */}
      <SetGoal />
    </div>
  );
}

export default Options;
