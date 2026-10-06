
import { isNumber } from "../utils/isTypeFn";

export const crUnitPx = (
   value: number | undefined 
) => isNumber(value)
  ? `${value}px`
  : void 0