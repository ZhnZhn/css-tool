'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var InputText = function (_Component) {
  _inherits(InputText, _Component);

  function InputText(props) {
    _classCallCheck(this, InputText);

    var _this = _possibleConstructorReturn(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this));

    _this._handleInputChange = function (event) {
      var value = event.target.value;
      _this.setState({ value: value });
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

    _this.isOnChange = typeof props.onChange === 'function' ? true : false;
    _this.isOnEnter = typeof props.onEnter === 'function' ? true : false;
    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  _createClass(InputText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({ value: nextProps.initValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style,
          value = this.state.value;

      return _react2.default.createElement('input', {
        name: 'text',
        autoComplete: 'new-text',
        autoCorrect: 'off',
        autoCapitalize: 'off',
        spellCheck: false,
        type: 'text',
        style: Object.assign({}, S.INPUT_TEXT, style),
        value: value,
        translate: false,
        onChange: this._handleInputChange,
        onKeyDown: this._handleKeyDown
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return InputText;
}(_react.Component);

InputText.propTypes = {
  style: _react.PropTypes.object,
  initValue: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};
InputText.defaultProps = {
  initValue: ''
};
exports.default = InputText;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn\InputText.js.map