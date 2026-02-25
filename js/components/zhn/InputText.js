"use strict";

exports.__esModule = true;
exports.default = void 0;
var _useInputValue = require("./useInputValue");
var _jsxRuntime = require("preact/jsx-runtime");
const InputText = props => {
  const [id, value, hKeyDown, hInput] = (0, _useInputValue.useInputValue)(props);
  return (0, _jsxRuntime.jsx)("input", {
    type: "text",
    id: id,
    className: _useInputValue.CL_INPUT,
    style: props.style,
    value: value,
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    translate: "no",
    maxLength: 25
    //onChange={hInput}    
    ,
    onInput: hInput,
    onKeyDown: hKeyDown
  });
};
var _default = exports.default = InputText;