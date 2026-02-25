"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useInputValue = require("./useInputValue");
var _getNumberValue = _interopRequireDefault(require("./getNumberValue"));
var _jsxRuntime = require("preact/jsx-runtime");
const InputNumber = props => {
  const {
      style,
      step = 1,
      min,
      max
    } = props,
    _getValue = (0, _uiApi.useCallback)(value => (0, _getNumberValue.default)(value, min, max), [min, max]),
    [id, value, hKeyDown, hInput] = (0, _useInputValue.useInputValue)(props, _getValue);
  return (0, _jsxRuntime.jsx)("input", {
    type: "number",
    id: id,
    className: _useInputValue.CL_INPUT,
    style: style,
    value: value,
    min: min,
    max: max,
    step: step
    //onChange={hInput} 
    ,
    onInput: hInput,
    onKeyDown: hKeyDown
  });
};
var _default = exports.default = InputNumber;