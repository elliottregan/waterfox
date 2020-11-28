import React from "react";
import { useUnits } from '../../dataSvc';

const unitTypesMap : Map<string, string> = new Map([
  [ 'imperial', 'oz' ],
  [ 'metric', 'L' ],
]);

export default function ShowUnits() {
  return (
    <span>{unitTypesMap.get(useUnits())}</span>
  )
}

