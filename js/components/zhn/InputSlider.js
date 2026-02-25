"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _math = require("../../utils/math");
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useObjValue = _interopRequireDefault(require("../hooks/useObjValue"));
var _useDragMouseDown = _interopRequireDefault(require("./useDragMouseDown"));
var _has = require("../has");
var _CircleInner = _interopRequireDefault(require("./CircleInner"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
    position: 'relative',
    width: '100%',
    height: 18,
    margin: '8px 0',
    userSelect: 'none',
    cursor: 'default'
  },
  S_ROOT_LINE = {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  S_LINE_BEFORE = {
    position: 'absolute',
    left: 0,
    width: 'calc(15%)',
    height: '100%',
    marginRight: 6,
    backgroundColor: '#00bcd4',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  S_LINE_AFTER = {
    position: 'absolute',
    right: 0,
    width: 'calc(85%)',
    height: '100%',
    marginLeft: 6,
    backgroundColor: '#bdbdbd',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  S_LINE_AFTER_HOVERED = {
    ...S_LINE_AFTER,
    backgroundColor: '#9e9e9e'
  },
  S_ROOT_CIRCLE = {
    //boxSizing: 'borderBox',
    boxSizing: 'border-box',
    zIndex: '1',
    position: 'absolute',
    top: 0,
    left: '15%',
    width: 12,
    height: 12,
    cursor: 'pointer',
    pointerEvents: 'inherit',
    margin: '1px 0px 0px',
    backgroundColor: '#00bcd4',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  S_CIRCLE_DRAGGED = {
    width: 20,
    height: 20
  },
  S_EMBER = {
    top: -12,
    left: -12,
    width: '220%',
    height: 44,
    border: '1px solid #4caf50'
  };
const _NOOP_FN = () => {},
  _checkValueInMinMax = (min, max, value) => value > max ? max : value < min ? min : value,
  _crWidthStyle = value => ({
    width: `calc(${value}%)`
  }),
  _crLeftStyle = value => ({
    left: `${value}%`
  }),
  _getClienX = _has.HAS_TOUCH_EVENTS ? evt => (((evt || {}).touches || [])[0] || {}).clientX || 0 : evt => evt.clientX,
  _isUp = keyCode => keyCode === 39 || keyCode === 38,
  _isDown = keyCode => keyCode === 37 || keyCode === 40,
  _calcValueByKeyCode = (value, step, keyCode) => _isUp(keyCode) ? value + step : _isDown(keyCode) ? value - step : value;
const InputSlider = _ref => {
  let {
    innerRef,
    initialValue = 4,
    step = 1,
    min = 0,
    max = 20,
    onChange = _NOOP_FN
  } = _ref;
  const _refExp = (0, _useRefInit.default)(() => {
      const arr = ('' + step).split('.');
      return arr[1] ? -1 * arr[1].length : 0;
    }),
    _refTrack = (0, _uiApi.useRef)(null),
    [isHovered, setHoveredTrue, setHoveredFalse] = (0, _useBool.default)(false),
    [value, setValue] = (0, _useObjValue.default)(initialValue),
    _updateValue = value => {
      const _value = _checkValueInMinMax(min, max, value);
      setValue(_value);
      onChange(_value);
    },
    _hKeyDown = evt => {
      const _value = _calcValueByKeyCode(value, step, evt.keyCode);
      if (_value !== value) {
        evt.preventDefault();
        _updateValue(_value);
      }
    },
    _calcPositionFromEvent = evt => {
      const _trackOffset = (0, _uiApi.getRefValue)(_refTrack)?.getBoundingClientRect().left;
      return (0, _isTypeFn.isNumber)(_trackOffset) ? _getClienX(evt) - _trackOffset : NaN;
    },
    _setValueFromPosition = evt => {
      const positionMax = (0, _uiApi.getRefValue)(_refTrack)?.clientWidth;
      let position = _calcPositionFromEvent(evt);
      if ((0, _isTypeFn.isNumber)(positionMax) && (0, _isTypeFn.isNumber)(position)) {
        if (position < 0) {
          position = 0;
        } else if (position > positionMax) {
          position = positionMax;
        }
        let v;
        v = position / positionMax * (max - min);
        v = Math.round(v / step) * step + min;
        v = (0, _math.round10)(v, (0, _uiApi.getRefValue)(_refExp));
        _updateValue(v);
      }
    },
    [isDragged, _hMouseDown] = (0, _useDragMouseDown.default)(_setValueFromPosition);
  (0, _uiApi.useImperativeHandleOr)(innerRef, () => ({
    setValue
  }), []);
  const [_sliderHandlers, _btHandlers] = _has.HAS_TOUCH_EVENTS ? [{
      onTouchStart: _hMouseDown
    }, void 0] : [{
      onMouseDown: _hMouseDown,
      onMouseEnter: setHoveredTrue,
      onMouseLeave: setHoveredFalse
    }, {
      onFocus: setHoveredTrue,
      onKeyDown: _hKeyDown,
      onBlur: setHoveredFalse
    }],
    _lineAfterStyle = isHovered ? S_LINE_AFTER_HOVERED : S_LINE_AFTER,
    [_circleStyle, _emberStyle] = isDragged ? [S_CIRCLE_DRAGGED, S_EMBER] : [],
    _percent = (0, _math.toPercent)(value, min, max),
    _widthBeforeStyle = _crWidthStyle(_percent),
    _widthAfterStyle = _crWidthStyle(100 - _percent),
    _leftStyle = _crLeftStyle(_percent);
  return (0, _jsxRuntime.jsx)("div", {
    style: S_ROOT,
    ..._sliderHandlers,
    children: (0, _jsxRuntime.jsxs)("div", {
      ref: _refTrack,
      style: S_ROOT_LINE,
      children: [(0, _jsxRuntime.jsx)("div", {
        style: {
          ...S_LINE_BEFORE,
          ..._widthBeforeStyle
        }
      }), (0, _jsxRuntime.jsx)("div", {
        style: {
          ..._lineAfterStyle,
          ..._widthAfterStyle
        }
      }), (0, _jsxRuntime.jsx)("input", {
        type: "hidden",
        step: step,
        min: min,
        max: max,
        value: value,
        required: true
      }), (0, _jsxRuntime.jsx)("div", {
        role: "slider",
        tabIndex: 0,
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-orientation": "horizontal",
        "aria-labelledby": "discrete-slider-custom",
        style: {
          ...S_ROOT_CIRCLE,
          ..._circleStyle,
          ..._leftStyle
        },
        ..._btHandlers,
        children: (0, _jsxRuntime.jsx)(_CircleInner.default, {
          is: isHovered || isDragged,
          circleStyle: _circleStyle,
          emberStyle: _emberStyle
        })
      })]
    })
  });
};
var _default = exports.default = InputSlider;