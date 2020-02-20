"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _fn = _interopRequireDefault(require("./helpers/fn"));

var CL = {
  PREVIEW: "page-sb__preview",
  INNER: "page-sb__preview__inner"
};

var _crBoxShadowStyle = function _crBoxShadowStyle(boxShadows) {
  return {
    boxShadow: boxShadows.map(_fn["default"].toCssValue).join(',')
  };
};

var Preview = function Preview(_ref) {
  var _ref$boxShadows = _ref.boxShadows,
      boxShadows = _ref$boxShadows === void 0 ? [] : _ref$boxShadows,
      _ref$configStyle = _ref.configStyle,
      configStyle = _ref$configStyle === void 0 ? {} : _ref$configStyle;

  var _style = _crBoxShadowStyle(boxShadows),
      bgColor = configStyle.bgColor,
      boxColor = configStyle.boxColor,
      boxBorderRadius = configStyle.boxBorderRadius,
      _rootStyle = {
    backgroundColor: bgColor
  },
      _boxStyle = {
    backgroundColor: boxColor,
    borderRadius: boxBorderRadius
  };

  return _react["default"].createElement("div", {
    className: CL.PREVIEW,
    style: _rootStyle
  }, _react["default"].createElement("div", {
    className: CL.INNER,
    style: (0, _extends2["default"])({}, _boxStyle, {}, _style)
  }));
};
/*
Preview.propTypes = {
  boxShadows: PropTypes.arrayOf(
    PropTypes.shape({
      gLength: PropTypes.number,
      vLength: PropTypes.number,
      blurR: PropTypes.number,
      spreadR: PropTypes.number,
      opacity: PropTypes.number
    })
  ),
  configStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    boxColor: PropTypes.string,
    borderRadius: PropTypes.string
  })
}
*/


var _default = Preview;
exports["default"] = _default;
//# sourceMappingURL=Preview.js.map