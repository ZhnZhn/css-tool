"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _A = _interopRequireDefault(require("../zhn/A"));

var S = {
  ROOT: {
    lineHeight: 1.8
  },
  COLOR: {
    "float": 'right',
    marginLeft: '16px',
    marginRight: '16px'
  },
  TEXT: {
    "float": 'right',
    width: '80px'
  }
};

var RowInputType3 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(RowInputType3, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
    styleInput: PropTypes.object,
    caption: PropTypes.string,
    initValue: PropTypes.string,
    onEnter: PropTypes.func
  }
  */
  function RowInputType3(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleEnter = function (value) {
      var color = (0, _tinycolor["default"])(value);

      if (color.isValid()) {
        _this.props.onEnter(value, color);

        _this.setState({
          value: color.toHexString()
        });
      }
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  var _proto = RowInputType3.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && this.state.value !== nextProps.initValue) {
      this.setState({
        value: nextProps.initValue
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        styleInput = _this$props.styleInput,
        caption = _this$props.caption,
        value = this.state.value;
    return _react["default"].createElement("div", {
      style: style
    }, _react["default"].createElement("label", {
      style: (0, _extends2["default"])({}, S.ROOT)
    }, _react["default"].createElement("span", null, caption), _react["default"].createElement(_A["default"].InputText, {
      style: (0, _extends2["default"])({}, S.TEXT, {}, styleInput),
      initValue: value,
      onEnter: this._handleEnter
    }), _react["default"].createElement(_A["default"].Color, {
      style: S.COLOR,
      value: value
    })));
  };

  return RowInputType3;
}(_react.Component);

RowInputType3.defaultProps = {
  onEnter: function onEnter() {}
};
var _default = RowInputType3;
exports["default"] = _default;
//# sourceMappingURL=RowInputType3.js.map