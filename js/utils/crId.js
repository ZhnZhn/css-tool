"use strict";

exports.__esModule = true;
exports.default = void 0;
const crId = (strSuffix = '') => Math.random().toString(36).slice(2, 11).toUpperCase() + strSuffix;
var _default = exports.default = crId;