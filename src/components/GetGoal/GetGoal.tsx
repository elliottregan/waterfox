import React from "react";
import { useGoal } from '../../dataSvc';
import GetUnits from '../GetUnits/GetUnits';

function Goal() {
  return (
    <ShowGoal />
  );
}

function ShowGoal() {
  const goal = useGoal();
  return (
    <span>{goal}<GetUnits /></span>
  )
}

export default Goal;
