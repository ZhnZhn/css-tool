"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _RowInputNumber = _interopRequireDefault(require("../zhn-r/RowInputNumber"));
var _RowInputColorHsl = _interopRequireDefault(require("../zhn-r/RowInputColorHsl"));
var _RowInputSwitch = _interopRequireDefault(require("../zhn-r/RowInputSwitch"));
var _jsxRuntime = require("preact/jsx-runtime");
const _crId = caption => caption.toLowerCase().replace(' ', '-');
const _crRowInputNumberProps = function (caption, min, max, step, shiftTimes, unit) {
  if (max === void 0) {
    max = -min;
  }
  if (step === void 0) {
    step = 1;
  }
  if (shiftTimes === void 0) {
    shiftTimes = 2;
  }
  if (unit === void 0) {
    unit = 'px';
  }
  return {
    id: _crId(caption),
    caption,
    min,
    max,
    step,
    shiftTimes,
    unit
  };
};
const hlProps = _crRowInputNumberProps("Horizontal Length", -30),
  vlProps = _crRowInputNumberProps("Vertical Length", -30),
  brProps = _crRowInputNumberProps("Blur Radius", 0, 20),
  srProps = _crRowInputNumberProps("Spread Radius", -10, 20),
  opProps = _crRowInputNumberProps("Opacity", 0, 1, 0.01, 10, '');
const _fnNoop = () => {};
const InputShadow = _ref => {
  let {
    id,
    initialValue,
    onChange = _fnNoop
  } = _ref;
  const {
    vLength,
    gLength,
    blurR,
    spreadR,
    opacity,
    color
  } = initialValue;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...hlProps,
      inputId: id,
      initValue: gLength,
      onChange: value => onChange('gLength', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...vlProps,
      inputId: id,
      initValue: vLength,
      onChange: value => onChange('vLength', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...brProps,
      inputId: id,
      initValue: blurR,
      onChange: value => onChange('blurR', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...srProps,
      inputId: id,
      initValue: spreadR,
      onChange: value => onChange('spreadR', value)
    }), (0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      id: "shadow-color",
      caption: "Shadow Color",
      initValue: color,
      onEnter: colorHex => onChange('color', colorHex)
    }, id), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...opProps,
      styleInput: {
        width: 55
      },
      inputId: id,
      initValue: opacity,
      onChange: value => onChange('opacity', value)
    }), (0, _jsxRuntime.jsx)(_RowInputSwitch.default, {
      initialValue: initialValue.isInset,
      caption: "Inset",
      onToggle: is => onChange('isInset', is)
    }, id)]
  });
};
var _default = exports.default = InputShadow;