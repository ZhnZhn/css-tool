'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLabel = function AppLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      caption = _ref.caption;
  return _react2.default.createElement(
    'span',
    { className: className, style: style },
    caption
  );
};

AppLabel.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  caption: _react.PropTypes.string
};

exports.default = AppLabel;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\header\AppLabel.js.map