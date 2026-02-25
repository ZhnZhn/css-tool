"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _crCn = _interopRequireDefault(require("../crCn"));
var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT = 'bt-flat',
  CL_BT_DIV = 'bt-flat__div',
  CL_BT_SPAN = 'bt-flat__span';
const S_PRIMARY = {
  color: '#607d8b'
};
const FlatButton = _ref => {
  let {
    className,
    style,
    clDiv = CL_BT_DIV,
    isPrimary,
    title = '',
    caption,
    accessKey,
    timeout = 3000,
    onClick,
    children
  } = _ref;
  const _refBt = (0, _uiApi.useRef)(null),
    _refTimeStamp = (0, _uiApi.useRef)(0),
    _hClick = (0, _uiApi.useCallback)(event => {
      if (timeout !== 0) {
        const _timeStamp = _refTimeStamp.current,
          {
            timeStamp
          } = event;
        if (_timeStamp && timeStamp - _timeStamp > timeout) {
          onClick(event);
        }
        _refTimeStamp.current = timeStamp;
      } else {
        onClick(event);
      }
    }, [timeout, onClick]),
    _style = isPrimary ? {
      ...style,
      ...S_PRIMARY
    } : style,
    _className = (0, _crCn.default)(CL_BT, className),
    _accessKey = _has.HAS_TOUCH_EVENTS ? void 0 : accessKey,
    _title = _accessKey ? `${title} [${accessKey}]` : title;
  /*eslint-disable jsx-a11y/no-access-key*/
  return (0, _jsxRuntime.jsx)("button", {
    ref: _refBt,
    className: _className,
    style: _style,
    accessKey: _accessKey,
    tabIndex: 0,
    title: _title,
    onClick: _hClick,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [(0, _jsxRuntime.jsx)(_CaptionInput.default, {
        className: CL_BT_SPAN,
        caption: caption,
        hotKey: _accessKey
      }), children]
    })
  });
};
var _default = exports.default = FlatButton;