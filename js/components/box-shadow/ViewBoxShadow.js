"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CssValue = _interopRequireDefault(require("./CssValue"));

var _Preview = _interopRequireDefault(require("./Preview"));

var CL = "page-sb__views";

var ViewBoxShadow = function ViewBoxShadow(_ref) {
  var boxShadows = _ref.boxShadows,
      currentIndex = _ref.currentIndex,
      configStyle = _ref.configStyle,
      onAdd = _ref.onAdd,
      onEdit = _ref.onEdit,
      onRemove = _ref.onRemove;
  return _react["default"].createElement("div", {
    className: CL
  }, _react["default"].createElement(_Preview["default"], {
    boxShadows: boxShadows,
    configStyle: configStyle
  }), _react["default"].createElement(_CssValue["default"], {
    currentIndex: currentIndex,
    boxShadows: boxShadows,
    onAdd: onAdd,
    onEdit: onEdit,
    onRemove: onRemove
  }));
};
/*
ViewBoxShadow.propTypes = {
  style: PropTypes.object,
  boxShadows: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
  configStyle: PropTypes.object,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
}
*/


var _isNotShouldUpdate = function _isNotShouldUpdate(_ref2, nextProps) {
  var boxShadows = _ref2.boxShadows,
      currentIndex = _ref2.currentIndex,
      configStyle = _ref2.configStyle;
  return boxShadows === nextProps.boxShadows && currentIndex === nextProps.currentIndex && configStyle === nextProps.configStyle ? true : false;
};

var _default = _react["default"].memo(ViewBoxShadow, _isNotShouldUpdate);

exports["default"] = _default;
//# sourceMappingURL=ViewBoxShadow.js.map