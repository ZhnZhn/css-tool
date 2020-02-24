"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _preact = require("preact");

/*
mostly from
http://www.material-ui.com/#/components/raised-button
*/
var S = {
  ROOT: {
    display: 'inline-block',
    color: 'rgba(0, 0, 0, 0.870588)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    borderRadius: 2,
    margin: 12
  },
  BT: {
    border: 10,
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

var RaisedButton = function RaisedButton(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  return (0, _preact.h)("div", {
    style: (0, _extends2["default"])({}, S.ROOT, {}, style)
  }, (0, _preact.h)("button", {
    style: S.BT,
    onClick: onClick
  }, (0, _preact.h)("div", {
    className: "bt-div",
    style: S.DIV
  }, (0, _preact.h)("span", {
    style: S.CAPTION
  }, caption))));
};

var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map