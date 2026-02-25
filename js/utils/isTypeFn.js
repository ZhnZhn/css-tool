"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isNumber = exports._isNaN = void 0;
const _isNaN = exports._isNaN = Number.isNaN || isNaN;
const isNumber = value => typeof value === "number" && value - value === 0;
exports.isNumber = isNumber;
const isStr = value => typeof value === "string";
exports.isStr = isStr;
const isObj = value => typeof value === "object" && value !== null;
exports.isObj = isObj;