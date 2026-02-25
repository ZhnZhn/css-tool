"use strict";

exports.__esModule = true;
exports.matcherRgba = exports.matcherRgb = exports.matcherHsva = exports.matcherHsv = exports.matcherHsla = exports.matcherHsl = exports.matcherHex8 = exports.matcherHex6 = exports.matcherHex4 = exports.matcherHex3 = exports.matcherCssUnit = void 0;
// <http://www.w3.org/TR/css3-values/#integers>
const CSS_INTEGER = "[-\\+]?\\d+%?";

// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
const PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
const PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
const matcherCssUnit = exports.matcherCssUnit = new RegExp(CSS_UNIT);
const matcherRgb = exports.matcherRgb = new RegExp("rgb" + PERMISSIVE_MATCH3);
const matcherRgba = exports.matcherRgba = new RegExp("rgba" + PERMISSIVE_MATCH4);
const matcherHsl = exports.matcherHsl = new RegExp("hsl" + PERMISSIVE_MATCH3);
const matcherHsla = exports.matcherHsla = new RegExp("hsla" + PERMISSIVE_MATCH4);
const matcherHsv = exports.matcherHsv = new RegExp("hsv" + PERMISSIVE_MATCH3);
const matcherHsva = exports.matcherHsva = new RegExp("hsva" + PERMISSIVE_MATCH4);
const matcherHex3 = exports.matcherHex3 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const matcherHex6 = exports.matcherHex6 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
const matcherHex4 = exports.matcherHex4 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const matcherHex8 = exports.matcherHex8 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;