"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _preact = require("preact");

var _hooks = _interopRequireDefault(require("../hooks"));

var _has = _interopRequireDefault(require("../has"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var useRef = _hooks["default"].useRef,
    useCallback = _hooks["default"].useCallback;
var HAS_TOUCH = _has["default"].HAS_TOUCH;
var CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
var S = {
  PRIMARY: {
    color: '#607d8b'
  }
};
var POINTER_EVENTS = 'pointer-events';

var _setPointerEvents = function _setPointerEvents(_ref, value) {
  if (value === void 0) {
    value = 'auto';
  }

  if (_ref && _ref.current && _ref.current.style) {
    _ref.current.style[POINTER_EVENTS] = value;
  }
};

var FlatButton = function FlatButton(_ref2) {
  var className = _ref2.className,
      rootStyle = _ref2.rootStyle,
      _ref2$clDiv = _ref2.clDiv,
      clDiv = _ref2$clDiv === void 0 ? CL.BT_DIV : _ref2$clDiv,
      isPrimary = _ref2.isPrimary,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? '' : _ref2$title,
      caption = _ref2.caption,
      accessKey = _ref2.accessKey,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === void 0 ? 3000 : _ref2$timeout,
      onClick = _ref2.onClick,
      children = _ref2.children;

  var _refBt = useRef(),
      _hClick = useCallback(function (event) {
    _setPointerEvents(_refBt, 'none');

    setTimeout(_setPointerEvents, timeout, _refBt);
    onClick(event);
  }, [timeout, onClick]),
      _style = isPrimary ? (0, _extends2["default"])({}, rootStyle, {}, S.PRIMARY) : rootStyle,
      _className = className ? CL.BT + " " + className : CL.BT,
      _accessKey = HAS_TOUCH ? void 0 : accessKey,
      _title = _accessKey ? title + " [" + accessKey + "]" : title;

  return (0, _preact.h)("button", {
    ref: _refBt,
    type: "button",
    className: _className,
    style: _style,
    accessKey: _accessKey,
    tabIndex: 0,
    title: _title,
    onClick: _hClick
  }, (0, _preact.h)("div", {
    className: clDiv
  }, (0, _preact.h)(_CaptionInput["default"], {
    className: CL.BT_SPAN,
    caption: caption,
    accessKey: _accessKey
  }), children));
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map