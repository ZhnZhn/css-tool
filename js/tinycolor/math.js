"use strict";

exports.__esModule = true;
exports.parseIntFromHex = exports.isPercentage = exports.crHexFromDec = exports.convertHexToDecimal = exports.bound01 = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const mathMin = Math.min,
  mathMax = Math.max,
  mathRound = Math.round,
  mathAbs = Math.abs;
const parseIntFromHex = val => parseInt('' + val, 16);
exports.parseIntFromHex = parseIntFromHex;
const convertHexToDecimal = h => parseIntFromHex(h) / 255;

// Check to see if string passed in is a percentage
exports.convertHexToDecimal = convertHexToDecimal;
const isPercentage = n => (0, _isTypeFn.isStr)(n) && n.indexOf('%') != -1;

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
exports.isPercentage = isPercentage;
const _isOnePointZero = n => (0, _isTypeFn.isStr)(n) && n.indexOf('.') != -1 && parseFloat(n) === 1;

// Take input from [0, n] and return it as [0, 1]
const bound01 = (n, max) => {
  if (_isOnePointZero(n)) {
    n = "100%";
  }
  const processPercent = isPercentage(n);
  n = mathMin(max, mathMax(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (processPercent) {
    n = parseInt('' + n * max, 10) / 100;
  }
  // Handle floating point rounding errors
  if (mathAbs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  return n % max / parseFloat(max);
};
exports.bound01 = bound01;
const _pad2 = c => c.length == 1 ? '0' + c : c;
const crHexFromDec = v => _pad2(mathRound(v).toString(16));
exports.crHexFromDec = crHexFromDec;