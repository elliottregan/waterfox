import React from "react";
import { useUnits } from '../../dataSvc';

const unitTypesMap : Map<string, string> = new Map([
  [ 'imperial', 'oz' ],
  [ 'metric', 'L' ],
]);

export default function ShowUnits() {
  const units = useUnits();
  return (
    <span>{unitTypesMap.get(units)}</span>
  )
}

