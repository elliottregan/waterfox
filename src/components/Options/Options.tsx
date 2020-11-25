import React from 'react';
import SetGoal from './fields/SetGoal/SetGoal'

import './Options.scss';

function Options() {
  return (
    <div className="Options container-fluid my-5">
      <h3>Settings</h3>
      <SetGoal />
    </div>
  );
}

export default Options;
