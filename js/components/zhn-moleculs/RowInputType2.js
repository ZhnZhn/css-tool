'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROOT: {
    lineHeight: 1.8
  },
  TEXT: {
    float: 'right',
    width: '80px'
  }
};

var RowInputType2 = function (_Component) {
  _inherits(RowInputType2, _Component);

  function RowInputType2() {
    _classCallCheck(this, RowInputType2);

    return _possibleConstructorReturn(this, (RowInputType2.__proto__ || Object.getPrototypeOf(RowInputType2)).apply(this, arguments));
  }

  _createClass(RowInputType2, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          styleInput = _props.styleInput,
          caption = _props.caption,
          initValue = _props.initValue,
          onEnter = _props.onEnter;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, STYLE.ROOT, style) },
        _react2.default.createElement(
          'span',
          null,
          caption
        ),
        _react2.default.createElement(_InputText2.default, {
          style: _extends({}, STYLE.TEXT, styleInput),
          initValue: initValue,
          onEnter: onEnter
        })
      );
    }
  }]);

  return RowInputType2;
}(_react.Component);

RowInputType2.propTypes = {
  style: _react.PropTypes.object,
  styleInput: _react.PropTypes.object,
  caption: _react.PropTypes.string,
  initValue: _react.PropTypes.string,
  onEnter: _react.PropTypes.func
};
RowInputType2.defaultProps = {
  onEnter: function onEnter() {}
};
exports.default = RowInputType2;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn-moleculs\RowInputType2.js.map