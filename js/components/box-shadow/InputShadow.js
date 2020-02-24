"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

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
  return (0, _react.useCallback)(fn.bind(null, propName, value), []);
};

var InputShadow = function InputShadow(_ref2) {
  var id = _ref2.id,
      isShadow = _ref2.isShadow,
      isInset = _ref2.isInset,
      initValue = _ref2.initValue,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange;

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
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[0], {
    inputId: id,
    initValue: vLength,
    onChange: _changeInput.bind(null, 'vLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[1], {
    inputId: id,
    initValue: gLength,
    onChange: _changeInput.bind(null, 'gLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[2], {
    inputId: id,
    initValue: blurR,
    onChange: _changeInput.bind(null, 'blurR')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[3], {
    inputId: id,
    initValue: spreadR,
    onChange: _changeInput.bind(null, 'spreadR')
  })), _react["default"].createElement(_Comp["default"].RowInputType3, {
    key: id + "-sc",
    caption: "Shadow Color",
    initValue: color,
    onEnter: _enterColor
  }), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, INPUT_ROWS[4], {
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

var _isNotShouldUpdate = function _isNotShouldUpdate(_ref3, nextProps) {
  var isShadow = _ref3.isShadow,
      id = _ref3.id,
      isInset = _ref3.isInset;
  return id === nextProps.id && isInset === nextProps.isInset && isShadow === nextProps.isShadow ? true : false;
};

var _default = _react["default"].memo(InputShadow, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=InputShadow.js.map