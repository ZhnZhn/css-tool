"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _preact = require("preact");

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _A = _interopRequireDefault(require("../zhn/A"));

var _style = _interopRequireDefault(require("./style"));

var _jsxRuntime = require("preact/jsx-runtime");

var RowInputType3 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowInputType3, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
    styleInput: PropTypes.object,
    caption: PropTypes.string,
    inputId: PropTypes.string,
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

    var initValue = props.initValue;
    _this.state = {
      value: initValue
    };
    return _this;
  }

  var _proto = RowInputType3.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        styleInput = _this$props.styleInput,
        caption = _this$props.caption,
        inputId = _this$props.inputId,
        value = this.state.value;
    return (0, _jsxRuntime.jsx)("div", {
      className: _style["default"].CL_ROW,
      children: (0, _jsxRuntime.jsxs)("label", {
        className: _style["default"].CL_CAPTION,
        children: [(0, _jsxRuntime.jsx)("span", {
          children: caption
        }), (0, _jsxRuntime.jsx)(_A["default"].InputText, {
          style: (0, _extends2["default"])({}, _style["default"].TEXT, styleInput),
          inputId: inputId,
          initValue: value,
          onEnter: this._handleEnter
        }), (0, _jsxRuntime.jsx)(_A["default"].Color, {
          style: _style["default"].COLOR,
          value: value
        })]
      })
    });
  };

  return RowInputType3;
}(_preact.Component);

RowInputType3.defaultProps = {
  onEnter: function onEnter() {}
};
var _default = RowInputType3;
exports["default"] = _default;
//# sourceMappingURL=RowInputType3.js.map