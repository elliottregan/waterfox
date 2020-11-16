import React from 'react';

// import logo from 'images/icon.svg';
import GetTotal from '../GetTotal/GetTotal';
import Goal from '../GetGoal/GetGoal';
import UpdateTotal from '../UpdateTotal/UpdateTotal';

import './Welcome.scss';

function Welcome() {
  return (
    <div className="Welcome container-fluid my-5">
      <div className="text-center">
        <GetTotal /> of <Goal />oz
        <UpdateTotal />
      </div>
    </div>
  );
}

// function Logo() {
//   return (
//     <img src={logo} alt="logo" width="64px" className="d-block mx-auto mb-4" />
//   );
// }

export default Welcome;
