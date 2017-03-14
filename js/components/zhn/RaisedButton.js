'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
mostly from
http://www.material-ui.com/#/components/raised-button
*/

var STYLE = {
  ROOT: {
    color: 'rgba(0, 0, 0, 0.870588)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    borderRadius: '2px',
    display: 'inline-block',
    margin: '12px'
  },
  BT: {
    border: '10px',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    position: 'relative',
    zIndex: '1',
    height: '36px',
    lineHeight: '36px',
    width: '100%',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    backgroundColor: 'rgb(0, 188, 212)',
    textAlign: 'center'
  },
  DIV: {
    height: '36px',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    top: '0px'
  },
  CAPTION: {
    position: 'relative',
    opacity: '1',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    margin: '0px',
    userSelect: 'none',
    paddingLeft: '16px',
    paddingRight: '16px',
    color: 'beige'
  }
};

var RaisedButton = function (_Component) {
  _inherits(RaisedButton, _Component);

  function RaisedButton() {
    _classCallCheck(this, RaisedButton);

    return _possibleConstructorReturn(this, (RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).apply(this, arguments));
  }

  _createClass(RaisedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          caption = _props.caption,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, STYLE.ROOT, style) },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            style: STYLE.BT,
            tabIndex: '0'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'bt-div',
              style: STYLE.DIV,
              onClick: onClick
            },
            _react2.default.createElement(
              'span',
              { style: STYLE.CAPTION },
              caption
            )
          )
        )
      );
    }
  }]);

  return RaisedButton;
}(_react.Component);

RaisedButton.propTypes = {
  style: _react.PropTypes.object,
  caption: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
RaisedButton.defaultProps = {
  onClick: function onClick() {}
};
exports.default = RaisedButton;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn\RaisedButton.js.map