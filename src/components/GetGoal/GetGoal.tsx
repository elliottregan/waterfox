import React from "react";
import { useGoal } from '../../dataSvc';

function Goal() {
  return (
    <ShowGoal />
  );
}

function ShowGoal() {
  const goal = useGoal();
  return (
    <span>{goal}</span>
  )
}

export default Goal;
