"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var CL = "page-sb__inputs";
var S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
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

var InputBoxShadow = function InputBoxShadow(_ref) {
  var initValue = _ref.initValue,
      configStyle = _ref.configStyle,
      isShadow = _ref.isShadow,
      isBox = _ref.isBox,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? function () {} : _ref$onEnter;

  var _refInput = (0, _react.useRef)({}),
      _handleChangeInput = (0, _react.useCallback)(function (propName, value) {
    _refInput.current[propName] = value;
    onChange(_refInput.current);
  }, []),
      _handleEnter = (0, _react.useCallback)(function (propName, value) {
    onEnter(propName, value);
  }, []),
      _handleEnterColor = (0, _react.useCallback)(function (value, color) {
    _refInput.current.color = color.toHexString();
    onChange(_refInput.current);
  }, []);

  (0, _react.useEffect)(function () {
    _refInput.current = initValue;
  }, [initValue.id]);
  var vLength = initValue.vLength,
      gLength = initValue.gLength,
      blurR = initValue.blurR,
      spreadR = initValue.spreadR,
      opacity = initValue.opacity,
      color = initValue.color,
      id = initValue.id,
      bgColor = configStyle.bgColor,
      boxColor = configStyle.boxColor,
      boxBorderRadius = configStyle.boxBorderRadius;

  if (!isShadow && !isBox) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: CL
  }, isShadow && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[0], {
    inputId: id,
    initValue: vLength,
    onChange: _handleChangeInput.bind(null, 'vLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[1], {
    inputId: id,
    initValue: gLength,
    onChange: _handleChangeInput.bind(null, 'gLength')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[2], {
    inputId: id,
    initValue: blurR,
    onChange: _handleChangeInput.bind(null, 'blurR')
  })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[3], {
    inputId: id,
    initValue: spreadR,
    onChange: _handleChangeInput.bind(null, 'spreadR')
  })), _react["default"].createElement(_Comp["default"].RowInputType3, {
    key: id + "-sc",
    style: S.ROW_INPUT,
    caption: "Shadow Color",
    initValue: color,
    onEnter: _handleEnterColor
  }), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[4], {
    inputId: id,
    initValue: opacity,
    onChange: _handleChangeInput.bind(null, 'opacity')
  }))), isBox && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Comp["default"].RowInputType3, {
    style: S.ROW_INPUT,
    styleInput: S.BOX_INPUT,
    caption: "Background",
    initValue: bgColor,
    onEnter: _handleEnter.bind(null, 'bgColor')
  }), _react["default"].createElement(_Comp["default"].RowInputType3, {
    style: S.ROW_INPUT,
    styleInput: S.BOX_INPUT,
    caption: "Box Background",
    initValue: boxColor,
    onEnter: _handleEnter.bind(null, 'boxColor')
  }), _react["default"].createElement(_Comp["default"].RowInputType2, {
    style: S.ROW_INPUT,
    styleInput: S.BOX_INPUT,
    caption: "Box Border Radius",
    initValue: boxBorderRadius,
    onEnter: _handleEnter.bind(null, 'boxBorderRadius')
  })));
};

var _isNotShouldUpdate = function _isNotShouldUpdate(_ref2, nextProps) {
  var initValue = _ref2.initValue,
      configStyle = _ref2.configStyle,
      isShadow = _ref2.isShadow,
      isBox = _ref2.isBox;
  return initValue.id === nextProps.initValue.id && configStyle === nextProps.configStyle && isShadow === nextProps.isShadow && isBox === nextProps.isBox ? true : false;
};

var _default = _react["default"].memo(InputBoxShadow, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=InputBoxShadow.js.map