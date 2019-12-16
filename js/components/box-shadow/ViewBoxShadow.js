"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _CssValue = _interopRequireDefault(require("./CssValue"));

var _Preview = _interopRequireDefault(require("./Preview"));

var ViewBoxShadow =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ViewBoxShadow, _Component);

  function ViewBoxShadow() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewBoxShadow.prototype;

  /*
  static propTypes = {
    style: PropTypes.object,
    boxShadows: PropTypes.arrayOf(PropTypes.object),
    currentIndex: PropTypes.number,
    configStyle: PropTypes.object,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
  }
  */
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps && this.props.boxShadows === nextProps.boxShadows && this.props.currentIndex === nextProps.currentIndex && this.props.configStyle === nextProps.configStyle) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        boxShadows = _this$props.boxShadows,
        currentIndex = _this$props.currentIndex,
        configStyle = _this$props.configStyle,
        onAdd = _this$props.onAdd,
        onEdit = _this$props.onEdit,
        onRemove = _this$props.onRemove;
    return _react["default"].createElement("div", {
      style: style
    }, _react["default"].createElement(_CssValue["default"], {
      currentIndex: currentIndex,
      boxShadows: boxShadows,
      onAdd: onAdd,
      onEdit: onEdit,
      onRemove: onRemove
    }), _react["default"].createElement(_Preview["default"], {
      boxShadows: boxShadows,
      configStyle: configStyle
    }));
  };

  return ViewBoxShadow;
}(_react.Component);

var _default = ViewBoxShadow;
exports["default"] = _default;
//# sourceMappingURL=ViewBoxShadow.js.map