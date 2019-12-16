"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var S = {
  INPUT_TEXT: {
    display: 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '32px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#E1E1CB',
    marginLeft: '5px',
    marginRight: '5px',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var InputText =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
    initValue: PropTypes.string,
    onChange: PropTypes.func
  }
  */
  function InputText(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleInputChange = function (event) {
      var value = event.target.value;

      _this.setState({
        value: value
      });

      if (_this.isOnChange) {
        _this.props.onChange(value);
      }
    };

    _this._handleKeyDown = function (event) {
      if (_this.isOnEnter) {
        if (event.keyCode === 13) {
          _this.props.onEnter(event.target.value);
        }
      }
    };

    _this.isOnChange = _isFn(props.onChange);
    _this.isOnEnter = _isFn(props.onEnter);
    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  var _proto = InputText.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        value: nextProps.initValue
      });
    }
  };

  _proto.render = function render() {
    var style = this.props.style,
        value = this.state.value;
    return _react["default"].createElement("input", {
      name: "text",
      autoComplete: "new-text",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      type: "text",
      style: (0, _extends2["default"])({}, S.INPUT_TEXT, {}, style),
      value: value,
      translate: "false",
      onChange: this._handleInputChange,
      onKeyDown: this._handleKeyDown
    });
  };

  _proto.getValue = function getValue() {
    return this.state.value;
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputText;
}(_react.Component);

InputText.defaultProps = {
  initValue: ''
};
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map