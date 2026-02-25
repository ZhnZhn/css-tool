"use strict";

exports.__esModule = true;
exports.toPercent = exports.round10 = void 0;
var _isTypeFn = require("./isTypeFn");
const splitNumberByE = n => ('' + n).split('e');
const round10 = (value, exp) => {
  if (exp == null) {
    return NaN;
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !((0, _isTypeFn.isNumber)(exp) && exp % 1 === 0)) {
    return NaN;
  }

  // Shift      
  let _arrV = splitNumberByE(value);
  value = Math.round(+(_arrV[0] + 'e' + (_arrV[1] ? +_arrV[1] - exp : -exp)));
  // Shift back
  _arrV = splitNumberByE(value);
  return +(_arrV[0] + 'e' + (_arrV[1] ? +_arrV[1] + exp : exp));
};
exports.round10 = round10;
const toPercent = (value, min, max) => {
  const percent = (value - min) / (max - min);
  return (0, _isTypeFn._isNaN)(percent) ? 0 : percent * 100;
};
exports.toPercent = toPercent;