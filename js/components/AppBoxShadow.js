"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _Page = _interopRequireDefault(require("./box-shadow/Page"));

var AppBoxShadow = function AppBoxShadow() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_HeaderBar["default"], null), _react["default"].createElement(_Page["default"], null));
};

var _default = AppBoxShadow;
exports["default"] = _default;
//# sourceMappingURL=AppBoxShadow.js.map