"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _has = require("../has");
const [EVENT_NAME_MOVE, EVENT_NAME_UP] = _has.HAS_TOUCH_EVENTS ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup'];
const useDragMouseDown = setValueFromPosition => {
  const [isDragged, setDraggedTrue, setDraggedFalse] = (0, _useBool.default)(false),
    _refDragRunning = (0, _uiApi.useRef)(false),
    _hDragMouseMove = evt => {
      if ((0, _uiApi.getRefValue)(_refDragRunning)) {
        return;
      }
      _refDragRunning.current = true;
      requestAnimationFrame(() => {
        _refDragRunning.current = false;
        setValueFromPosition(evt);
      });
    },
    _hDragMouseUp = () => {
      document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove);
      document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp);
      setDraggedFalse();
    },
    _hMouseDown = evt => {
      // Cancel text selection
      if (!_has.HAS_TOUCH_EVENTS) {
        evt.preventDefault();
      }
      document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove);
      document.addEventListener(EVENT_NAME_UP, _hDragMouseUp);
      setDraggedTrue();
    };
  return [isDragged, _hMouseDown];
};
var _default = exports.default = useDragMouseDown;