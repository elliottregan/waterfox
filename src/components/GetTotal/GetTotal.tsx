import React, { useEffect, useRef } from "react";
import { useAmount, useGoal } from '../../dataSvc';
import AnimateNumber from '../AnimateNumber/AnimateNumber';
import GetUnits from '../GetUnits/GetUnits';

const unit = 'oz';

interface defaultProps {
  unit?: string;
}

const useIsMounted = () => {
  const isMounted = useRef<Boolean>(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, []);
  return isMounted;
};

export default function ShowAmount(props:defaultProps) {
  const componentIsMounted = useIsMounted();
  const total = useAmount(componentIsMounted);
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
