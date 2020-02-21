"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var S = {
  DIV: {
    marginBottom: 32
  },
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  }
};

var InputBox = function InputBox(_ref) {
  var isBox = _ref.isBox,
      configStyle = _ref.configStyle,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? function () {} : _ref$onEnter;

  var _handleEnter = (0, _react.useCallback)(function (propName, value) {
    onEnter(propName, value);
  }, []);

  if (!isBox) {
    return null;
  }

  var bgColor = configStyle.bgColor,
      boxColor = configStyle.boxColor,
      boxBorderRadius = configStyle.boxBorderRadius;
  return _react["default"].createElement("div", {
    style: S.DIV
  }, _react["default"].createElement(_Comp["default"].RowInputType3, {
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
  }));
};

var _isNotShouldUpdate = function _isNotShouldUpdate(_ref2, nextProps) {
  var isBox = _ref2.isBox,
      configStyle = _ref2.configStyle;
  return isBox === nextProps.isBox && configStyle === nextProps.configStyle ? true : false;
};

var _default = _react["default"].memo(InputBox, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=InputBox.js.map