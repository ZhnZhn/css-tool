"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  }
};
var inputRows = [{
  style: S.ROW_INPUT,
  caption: "Horizontal Length",
  name: 'horizontal-lenght',
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Vertical Length",
  name: 'vertical-length',
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Blur Radius",
  name: 'blur-radius',
  min: 0,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Spread Radius",
  name: 'spread-radius',
  min: -10,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  styleInput: {
    width: 55
  },
  caption: "Opacity",
  name: 'opacity',
  min: 0,
  max: 1,
  step: 0.01,
  unit: ''
}];

var _useChangeValue = function _useChangeValue(fn, propName, value) {
  return (0, _react.useCallback)(fn.bind(null, propName, value), []);
};

var InputShadow = function InputShadow(_ref) {
  var id = _ref.id,
      isShadow = _ref.isShadow,
      isInset = _ref.isInset,
      initValue = _ref.initValue,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var _refInput = (0, _react.useRef)({}),
      _changeInput = (0, _react.useCallback)(function (propName, value) {
    _refInput.current[propName] = value;
    onChange(_refInput.current);
  }, []),
      _enterColor = (0, _react.useCallback)(function (value, color) {
    _refInput.current.color = color.toHexString();
    onChange(_refInput.current);
  }, []),
      _onChechInset = _useChangeValue(_changeInput, 'isInset', true),
      _onUnCheckInset = _useChangeValue(_changeInput, 'isInset', false);

  (0, _react.useEffect)(function () {
    _refInput.current = initValue;
  }, [id, isInset]);

  if (!isShadow) {
    return null;
  }

  var vLength = initValue.vLength,
      gLength = initValue.gLength,
      blurR = initValue.blurR,
      spreadR = initValue.spreadR,
      opacity = initValue.opacity,
      color = initValue.color;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[0], {
    inputId: id,
    initValue: vLength,
    onChange: _changeInput.bind(null, 'vLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[1], {
    inputId: id,
    initValue: gLength,
    onChange: _changeInput.bind(null, 'gLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[2], {
    inputId: id,
    initValue: blurR,
    onChange: _changeInput.bind(null, 'blurR')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[3], {
    inputId: id,
    initValue: spreadR,
    onChange: _changeInput.bind(null, 'spreadR')
  })), _react["default"].createElement(_Comp["default"].RowInputType3, {
    key: id + "-sc",
    style: S.ROW_INPUT,
    caption: "Shadow Color",
    initValue: color,
    onEnter: _enterColor
  }), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[4], {
    inputId: id,
    initValue: opacity,
    onChange: _changeInput.bind(null, 'opacity')
  })), _react["default"].createElement(_Comp["default"].RowCheckBox, {
    caption: "Inset",
    value: isInset,
    onCheck: _onChechInset,
    onUnCheck: _onUnCheckInset
  }));
};

var _isNotShouldUpdate = function _isNotShouldUpdate(_ref2, nextProps) {
  var isShadow = _ref2.isShadow,
      id = _ref2.id,
      isInset = _ref2.isInset;
  return id === nextProps.id && isInset === nextProps.isInset && isShadow === nextProps.isShadow ? true : false;
};

var _default = _react["default"].memo(InputShadow, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=InputShadow.js.map