
const mathMin = Math.min
, mathMax = Math.max
, mathRound = Math.round
, mathAbs = Math.abs;

export function parseIntFromHex(val: any) {
  return parseInt(val, 16);
}

export function convertHexToDecimal(h: any) {
  return (parseIntFromHex(h) / 255);
}

// Check to see if string passed in is a percentage
export function isPercentage(n: unknown) {
  return typeof n === "string" 
    && n.indexOf('%') != -1;
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n: unknown) {
  return typeof n == "string" 
    && n.indexOf('.') != -1 
    && parseFloat(n) === 1;
}

// Take input from [0, n] and return it as [0, 1]
export function bound01(n: any, max: any) {
    if (isOnePointZero(n)) { n = "100%"; }

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

function pad2(c: string) {
    return c.length == 1 ? '0' + c : c;
}

export function crHexFromDec(v: number) {
    return pad2(mathRound(v).toString(16));
}