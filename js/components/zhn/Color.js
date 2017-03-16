'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT: {
    display: 'inline-block',
    height: '32px',
    width: '32px',
    borderRadius: '2px',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

var Color = function Color(_ref) {
  var style = _ref.style,
      value = _ref.value;

  var _style = value ? { backgroundColor: value } : null;
  return _react2.default.createElement('span', { style: _extends({}, STYLE.ROOT, style, _style) });
};

Color.propTypes = {
  style: _react.PropTypes.object,
  value: _react.PropTypes.string
};

exports.default = Color;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn\Color.js.map