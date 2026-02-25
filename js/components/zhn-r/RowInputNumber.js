"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _math = require("../../utils/math");
var _uiApi = require("../uiApi");
var _memo = _interopRequireDefault(require("../memo"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _InputNumber = _interopRequireDefault(require("../zhn/InputNumber"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _InputSlider = _interopRequireDefault(require("../zhn/InputSlider"));
var _style = require("./style");
var _jsxRuntime = require("preact/jsx-runtime");
const _crStepExp = step => {
  const _arr = ('' + step).split('.');
  return _arr[1] ? -1 * _arr[1].length : 0;
};
const _crNumberValue = (stepExp, value) => stepExp === 0 ? parseFloat('' + value) : (0, _math.round10)(parseFloat('' + value), stepExp);
const _FN_NOOP = () => {};
const RowInputNumber = _ref => {
  let {
    id,
    unit = 'px',
    step = 1,
    min,
    max,
    styleInput,
    caption,
    initValue,
    inputId,
    onChange = _FN_NOOP
  } = _ref;
  const _refStepExp = (0, _uiApi.useRef)(_crStepExp(step)),
    _hChangeNumber = (0, _uiApi.useCallback)(value => {
      const _value = _crNumberValue(_refStepExp.current, value);
      if (_value >= min && _value <= max) {
        onChange(_value);
      }
    }, [min, max, onChange]),
    [isShowSlider, toggleIsShowSlider] = (0, _useToggle.default)();
  return (0, _jsxRuntime.jsxs)("div", {
    className: _style.CL_ROW,
    children: [(0, _jsxRuntime.jsxs)("label", {
      className: _style.CL_CAPTION,
      children: [(0, _jsxRuntime.jsx)("span", {
        children: caption
      }), (0, _jsxRuntime.jsx)("span", {
        style: _style.S_RIGHT,
        children: unit
      }), (0, _jsxRuntime.jsx)(_InputNumber.default, {
        id: id,
        style: {
          ..._style.S_RIGHT,
          ...styleInput
        },
        initialValue: initValue,
        step: step,
        min: min,
        max: max,
        onChange: _hChangeNumber,
        onEnter: toggleIsShowSlider
      }, inputId)]
    }), (0, _jsxRuntime.jsx)(_ShowHide.default, {
      is: isShowSlider,
      children: (0, _jsxRuntime.jsx)(_InputSlider.default, {
        initialValue: initValue,
        step: step,
        min: min,
        max: max,
        onChange: _hChangeNumber
      }, `sl-${inputId}`)
    })]
  });
};
const _isNotShouldUpdate = (prevProps, nextProps) => prevProps.initValue === nextProps.initValue && prevProps.inputId === nextProps.inputId;
var _default = exports.default = (0, _memo.default)(RowInputNumber, _isNotShouldUpdate);