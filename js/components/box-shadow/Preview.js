"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _fn = _interopRequireDefault(require("./helpers/fn"));

var S = {
  ROOT: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 24
  },
  INNER: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: 250,
    resize: 'both',
    overflow: 'auto'
  }
};

var _crBoxShadowStyle = function _crBoxShadowStyle(boxShadows) {
  return {
    boxShadow: boxShadows.map(_fn["default"].toCssValue).join(',')
  };
};

var Preview = function Preview(_ref) {
  var _ref$boxShadows = _ref.boxShadows,
      boxShadows = _ref$boxShadows === void 0 ? [] : _ref$boxShadows,
      configStyle = _ref.configStyle;

  var _style = _crBoxShadowStyle(boxShadows),
      _rootStyle = {
    backgroundColor: configStyle.bgColor
  },
      _boxStyle = {
    backgroundColor: configStyle.boxColor,
    borderRadius: configStyle.boxBorderRadius
  };

  return _react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, S.ROOT, {}, _rootStyle)
  }, _react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, S.INNER, {}, _boxStyle, {}, _style)
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