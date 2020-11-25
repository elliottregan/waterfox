import React from 'react';

import GetTotal from '../GetTotal/GetTotal';
import Goal from '../GetGoal/GetGoal';
import UpdateTotal from '../UpdateTotal/UpdateTotal';
import SettingsLink from '../navigation/SettingsLink/SettingsLink';

import './Welcome.scss';

function Welcome() {
  return (
    <main>
      <div className="Welcome container-fluid my-5">
        <div className="text-center">
          <GetTotal /> of <Goal />oz
          <UpdateTotal />
          <SettingsLink />
        </div>
      </div>
    </main>
  );
}

export default Welcome;
