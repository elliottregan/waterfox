import React, { useEffect, useRef } from "react";
import { useAmountAsync } from './useAmountAsync';

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
  return (
    <span>{`${amount}`}</span>
  )
}

export default Popup;
