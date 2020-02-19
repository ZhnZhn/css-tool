"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crId = function crId(strSuffix) {
  if (strSuffix === void 0) {
    strSuffix = '';
  }

  return Math.random().toString(36).substr(2, 9).toUpperCase() + strSuffix;
};

var _default = crId;
exports["default"] = _default;
//# sourceMappingURL=crId.js.map