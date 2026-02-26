"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memo = _interopRequireDefault(require("../memo"));
var _RowInputText = _interopRequireDefault(require("../zhn-r/RowInputText"));
var _RowInputColorHsl = _interopRequireDefault(require("../zhn-r/RowInputColorHsl"));
var _RowInputSwitch = _interopRequireDefault(require("../zhn-r/RowInputSwitch"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
    marginBottom: 32
  },
  S_BOX_INPUT = {
    color: 'brown'
  };
const _fnNoop = () => {};
const InputBox = _ref => {
  let {
    configStyle,
    onEnter = _fnNoop
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [(0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      styleInput: S_BOX_INPUT,
      caption: "View Background",
      initValue: configStyle.bgColor,
      onEnter: value => onEnter('bgColor', value)
    }), (0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      styleInput: S_BOX_INPUT,
      caption: "Background",
      initValue: configStyle.boxColor,
      onEnter: value => onEnter('boxColor', value)
    }), (0, _jsxRuntime.jsx)(_RowInputText.default, {
      styleInput: S_BOX_INPUT,
      caption: "Border Radius",
      initValue: configStyle.boxBorderRadius,
      onEnter: value => onEnter('boxBorderRadius', value)
    }), (0, _jsxRuntime.jsx)(_RowInputSwitch.default, {
      initialValue: configStyle.isBoxResize,
      caption: "Resize",
      onToggle: is => onEnter('isBoxResize', is)
    })]
  });
};
const _isNotShouldUpdate = (prevProps, nextProps) => prevProps.configStyle === nextProps.configStyle;
var _default = exports.default = (0, _memo.default)(InputBox, _isNotShouldUpdate);