"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memo = _interopRequireDefault(require("../memo"));
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _RowInputText = _interopRequireDefault(require("../zhn-r/RowInputText"));
var _RowInputColorHsl = _interopRequireDefault(require("../zhn-r/RowInputColorHsl"));
var _RowInputNumber = _interopRequireDefault(require("../zhn-r/RowInputNumber"));
var _RowInputSwitch = _interopRequireDefault(require("../zhn-r/RowInputSwitch"));
var _cssFn = require("./cssFn");
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
    marginBottom: 32
  },
  S_BOX_INPUT = {
    color: "brown"
  },
  S_INPUT_DIMENSION = {
    width: 62
  };
const InputBox = _ref => {
  let {
    configStyle,
    onEnter
  } = _ref;
  const _refMaxDimension = (0, _useRefInit.default)(() => (0, _uiApi.calcDimensionByClassName)(_cssFn.CL_PREVIEW)),
    _maxDimension = (0, _uiApi.getRefValue)(_refMaxDimension) || [100, 100];
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_DIV,
    children: [(0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      styleInput: S_BOX_INPUT,
      caption: "View Background",
      initValue: configStyle.bgColor,
      onEnter: colorHex => onEnter("bgColor", colorHex)
    }), (0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      styleInput: S_BOX_INPUT,
      caption: "Background",
      initValue: configStyle.boxColor,
      onEnter: colorHex => onEnter("boxColor", colorHex)
    }), (0, _jsxRuntime.jsx)(_RowInputText.default, {
      styleInput: S_BOX_INPUT,
      caption: "Border Radius",
      initValue: configStyle.boxBorderRadius,
      onEnter: value => onEnter("boxBorderRadius", value)
    }), !configStyle.isBoxResize && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_RowInputNumber.default, {
        inputId: "sb-width",
        styleInput: S_INPUT_DIMENSION,
        caption: "Width",
        min: 16,
        max: _maxDimension[0],
        initValue: configStyle.width || ((0, _uiApi.calcDimensionByClassName)(_cssFn.CL_PREVIEW_INNER) || [])[0],
        shiftTimes: 5,
        onChange: value => onEnter("width", value)
      }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
        inputId: "sb-height",
        styleInput: S_INPUT_DIMENSION,
        caption: "Height",
        min: 16,
        max: _maxDimension[1],
        initValue: configStyle.height || ((0, _uiApi.calcDimensionByClassName)(_cssFn.CL_PREVIEW_INNER) || [])[1],
        shiftTimes: 5,
        onChange: value => onEnter("height", value)
      })]
    }), (0, _jsxRuntime.jsx)(_RowInputSwitch.default, {
      initialValue: configStyle.isBoxResize,
      caption: "Resize",
      onToggle: is => onEnter("isBoxResize", is)
    })]
  });
};
const _isNotShouldUpdate = (prevProps, nextProps) => prevProps.configStyle === nextProps.configStyle;
var _default = exports.default = (0, _memo.default)(InputBox, _isNotShouldUpdate);