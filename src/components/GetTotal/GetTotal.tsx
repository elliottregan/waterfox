import React from "react";
import { useAmount, useGoal } from '../../dataSvc';
import AnimateNumber from '../AnimateNumber/AnimateNumber';
import GetUnits from '../GetUnits/GetUnits';

interface defaultProps {
  unit?: string;
}

export default function ShowAmount(props:defaultProps) {
  const total = useAmount();
  const goal = useGoal();
  let value = total;

  if (props.unit === 'percent') {
    value = total/goal * 100;
  }

  const style = {
    display: 'inline-block',
    textAlign: 'left' as 'left',
  }
  return (
    <span style={style}><AnimateNumber value={value} />{ props.unit === 'percent' ? '%' : <GetUnits />}</span>
  )
}
