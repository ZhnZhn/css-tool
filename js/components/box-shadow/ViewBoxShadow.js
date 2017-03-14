'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CssValue = require('./CssValue');

var _CssValue2 = _interopRequireDefault(_CssValue);

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewBoxShadow = function (_Component) {
  _inherits(ViewBoxShadow, _Component);

  function ViewBoxShadow() {
    _classCallCheck(this, ViewBoxShadow);

    return _possibleConstructorReturn(this, (ViewBoxShadow.__proto__ || Object.getPrototypeOf(ViewBoxShadow)).apply(this, arguments));
  }

  _createClass(ViewBoxShadow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps && this.props.boxShadows === nextProps.boxShadows && this.props.currentIndex === nextProps.currentIndex && this.props.configStyle === nextProps.configStyle) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          boxShadows = _props.boxShadows,
          currentIndex = _props.currentIndex,
          configStyle = _props.configStyle,
          onAdd = _props.onAdd,
          onEdit = _props.onEdit,
          onRemove = _props.onRemove;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_CssValue2.default, {
          currentIndex: currentIndex,
          boxShadows: boxShadows,
          onAdd: onAdd,
          onEdit: onEdit,
          onRemove: onRemove
        }),
        _react2.default.createElement(_Preview2.default, {
          boxShadows: boxShadows,
          configStyle: configStyle
        })
      );
    }
  }]);

  return ViewBoxShadow;
}(_react.Component);

ViewBoxShadow.propTypes = {
  style: _react.PropTypes.object,
  boxShadows: _react.PropTypes.arrayOf(_react.PropTypes.object),
  currentIndex: _react.PropTypes.number,
  configStyle: _react.PropTypes.object,
  onAdd: _react.PropTypes.func,
  onEdit: _react.PropTypes.func,
  onRemove: _react.PropTypes.func
};
exports.default = ViewBoxShadow;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\ViewBoxShadow.js.map