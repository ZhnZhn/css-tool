
import { isStr } from "../utils/isTypeFn";


const mathMin = Math.min
, mathMax = Math.max
, mathRound = Math.round
, mathAbs = Math.abs;

export const parseIntFromHex = (
  val: unknown
) => parseInt('' + val, 16)

export const convertHexToDecimal = (
  h: unknown
) => parseIntFromHex(h) / 255

// Check to see if string passed in is a percentage
export const isPercentage= (
  n: unknown
) => isStr(n) && n.indexOf('%') != -1;

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
const _isOnePointZero = (
  n: unknown
) => isStr(n)
  && n.indexOf('.') != -1 
  && parseFloat(n) === 1;

// Take input from [0, n] and return it as [0, 1]
export const bound01 = (
  n: any, 
  max: any
) => {
  if (_isOnePointZero(n)) { n = "100%"; }
  const processPercent = isPercentage(n);
  n = mathMin(max, mathMax(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (processPercent) {
      n = parseInt(''+n * max, 10) / 100;
  }
  // Handle floating point rounding errors
  if ((mathAbs(n - max) < 0.000001)) {
      return 1;
  }
  // Convert into [0, 1] range if it isn't already
  return (n % max) / parseFloat(max);
}

const _pad2 = (c: string) => c.length == 1 
  ? '0' + c 
  : c;

export const crHexFromDec = (
  v: number
) => _pad2(mathRound(v).toString(16))
