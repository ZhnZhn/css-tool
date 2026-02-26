"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _style = require("./style");
var _jsxRuntime = require("preact/jsx-runtime");
const RowInputSwitch = props => (0, _jsxRuntime.jsx)(_InputSwitch.default, {
  className: _style.CL_ROW,
  style: _style.S_INPUT_SWITCH,
  ...props
});
var _default = exports.default = RowInputSwitch;