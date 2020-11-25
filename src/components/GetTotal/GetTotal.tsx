import React, { useEffect, useRef } from "react";
import { useAmountAsync } from './useAmountAsync';
import AnimateNumber from '../AnimateNumber/AnimateNumber';

function Popup() {
  return (
    <ShowAmount />
  );
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

function ShowAmount() {
  const componentIsMounted = useIsMounted();
  const amount = useAmountAsync(componentIsMounted);
  const style = {
    width: `${amount.toString().length}ch`,
    display: 'inline-block',
    'text-align': 'right',
  }
  return (
    <span style={style}><AnimateNumber value={amount} duration={300} /></span>
  )
}

export default Popup;
