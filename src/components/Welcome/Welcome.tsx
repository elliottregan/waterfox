import React from 'react';

import Total from '../GetTotal/GetTotal';
import Goal from '../GetGoal/GetGoal';
import UpdateTotal from '../UpdateTotal/UpdateTotal';
import SettingsLink from '../navigation/SettingsLink/SettingsLink';

import './Welcome.scss';

function Welcome() {
  return (
    <main>
      <div className="Welcome container-fluid my-5">
        <div className="percent">
          <Total unit="percent" />
        </div>
        <div className="total-units"><Total /> of <Goal />oz</div>
        <div className="button-row">
          <UpdateTotal />
        </div>

        <SettingsLink />
      </div>
    </main>
  );
}

export default Welcome;
