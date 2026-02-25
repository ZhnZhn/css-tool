"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _RowInputNumber = _interopRequireDefault(require("../zhn-r/RowInputNumber"));
var _RowInputColorHsl = _interopRequireDefault(require("../zhn-r/RowInputColorHsl"));
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _style = require("../zhn-r/style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_INPUT_SWITCH = {
  flexDirection: 'row',
  width: 'fit-content'
};
const _crId = caption => caption.toLowerCase().replace(' ', '-');
const INPUT_ROWS = [{
  caption: "Horizontal Length",
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  caption: "Vertical Length",
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  caption: "Blur Radius",
  min: 0,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  caption: "Spread Radius",
  min: -10,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  styleInput: {
    width: 55
  },
  caption: "Opacity",
  min: 0,
  max: 1,
  step: 0.01,
  unit: ''
}].map(item => ({
  id: _crId(item.caption),
  ...item
}));
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
      ...INPUT_ROWS[0],
      inputId: id,
      initValue: gLength,
      onChange: value => onChange('gLength', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...INPUT_ROWS[1],
      inputId: id,
      initValue: vLength,
      onChange: value => onChange('vLength', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...INPUT_ROWS[2],
      inputId: id,
      initValue: blurR,
      onChange: value => onChange('blurR', value)
    }), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...INPUT_ROWS[3],
      inputId: id,
      initValue: spreadR,
      onChange: value => onChange('spreadR', value)
    }), (0, _jsxRuntime.jsx)(_RowInputColorHsl.default, {
      id: "shadow-color",
      caption: "Shadow Color",
      initValue: color,
      onEnter: (_value, color) => onChange('color', color.toHexString())
    }, id), (0, _jsxRuntime.jsx)(_RowInputNumber.default, {
      ...INPUT_ROWS[4],
      inputId: id,
      initValue: opacity,
      onChange: value => onChange('opacity', value)
    }), (0, _jsxRuntime.jsx)(_InputSwitch.default, {
      initialValue: initialValue.isInset,
      className: _style.CL_ROW,
      style: S_INPUT_SWITCH,
      caption: "Inset",
      onCheck: () => onChange('isInset', true),
      onUnCheck: () => onChange('isInset', false)
    }, id)]
  });
};
var _default = exports.default = InputShadow;