"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _hooks = _interopRequireDefault(require("../hooks"));

var _memo = _interopRequireDefault(require("../memo"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("preact/jsx-runtime");

var useRef = _hooks["default"].useRef,
    useCallback = _hooks["default"].useCallback,
    useEffect = _hooks["default"].useEffect;

var _crName = function _crName(_ref) {
  var caption = _ref.caption;
  return caption.toLowerCase().replace(' ', '-');
};

var INPUT_ROWS = [{
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
}].map(function (item) {
  return (0, _extends2["default"])({
    name: _crName(item)
  }, item);
});

var _useChangeValue = function _useChangeValue(fn, propName, value) {
  return useCallback(fn.bind(null, propName, value), []);
};

var InputShadow = function InputShadow(_ref2) {
  var id = _ref2.id,
      isShadow = _ref2.isShadow,
      isInset = _ref2.isInset,
      initValue = _ref2.initValue,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange;

  var _refInput = useRef({}),
      _changeInput = useCallback(function (propName, value) {
    _refInput.current[propName] = value;
    onChange(_refInput.current);
  }, []),
      _enterColor = useCallback(function (value, color) {
    _refInput.current.color = color.toHexString();
    onChange(_refInput.current);
  }, []),
      _onChechInset = _useChangeValue(_changeInput, 'isInset', true),
      _onUnCheckInset = _useChangeValue(_changeInput, 'isInset', false);

  useEffect(function () {
    _refInput.current = initValue;
  }, [id, isInset]);

  if (!isShadow) {
    return (0, _jsxRuntime.jsx)("div", {});
  }

  var vLength = initValue.vLength,
      gLength = initValue.gLength,
      blurR = initValue.blurR,
      spreadR = initValue.spreadR,
      opacity = initValue.opacity,
      color = initValue.color;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[0], {
      inputId: id,
      initValue: vLength,
      onChange: _changeInput.bind(null, 'vLength')
    })), (0, _jsxRuntime.jsx)(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[1], {
      inputId: id,
      initValue: gLength,
      onChange: _changeInput.bind(null, 'gLength')
    })), (0, _jsxRuntime.jsx)(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[2], {
      inputId: id,
      initValue: blurR,
      onChange: _changeInput.bind(null, 'blurR')
    })), (0, _jsxRuntime.jsx)(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[3], {
      inputId: id,
      initValue: spreadR,
      onChange: _changeInput.bind(null, 'spreadR')
    })), (0, _jsxRuntime.jsx)(_Comp["default"].RowInputType3, {
      caption: "Shadow Color",
      initValue: color,
      onEnter: _enterColor
    }, id + "-sc"), (0, _jsxRuntime.jsx)(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[4], {
      inputId: id,
      initValue: opacity,
      onChange: _changeInput.bind(null, 'opacity')
    })), (0, _jsxRuntime.jsx)(_Comp["default"].RowCheckBox, {
      caption: "Inset",
      value: isInset,
      onCheck: _onChechInset,
      onUnCheck: _onUnCheckInset
    })]
  });
};

var _isNotShouldUpdate = function _isNotShouldUpdate(_ref3, nextProps) {
  var isShadow = _ref3.isShadow,
      id = _ref3.id,
      isInset = _ref3.isInset;
  return id === nextProps.id && isInset === nextProps.isInset && isShadow === nextProps.isShadow ? true : false;
};

var _default = (0, _memo["default"])(InputShadow, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=InputShadow.js.map