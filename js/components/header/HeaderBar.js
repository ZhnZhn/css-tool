'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _GitHubLink = require('./GitHubLink');

var _GitHubLink2 = _interopRequireDefault(_GitHubLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CAPTION = "CSS Tool v0.1.0";

var HeaderBar = function (_Component) {
  _inherits(HeaderBar, _Component);

  function HeaderBar() {
    _classCallCheck(this, HeaderBar);

    return _possibleConstructorReturn(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).apply(this, arguments));
  }

  _createClass(HeaderBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(_IconAppLogo2.default, {
          className: 'header__icon-app',
          title: CAPTION
        }),
        _react2.default.createElement(_AppLabel2.default, {
          className: 'header__label-app',
          caption: CAPTION
        }),
        _react2.default.createElement(_GitHubLink2.default, {
          className: 'header__github-link',
          title: 'GitHub Repository',
          href: 'https://github.com/zhnzhn/css-tool'
        })
      );
    }
  }]);

  return HeaderBar;
}(_react.Component);

exports.default = HeaderBar;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\header\HeaderBar.js.map