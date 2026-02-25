"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const _isKeyEnter = _ref => {
  let {
    keyCode
  } = _ref;
  return keyCode === 13 || keyCode === 32;
};
const useKeyEnter = onKeyEnter => (0, _uiApi.useCallback)(event => {
  if (_isKeyEnter(event)) {
    event.preventDefault();
    onKeyEnter(event);
  }
}, [onKeyEnter]);
var _default = exports.default = useKeyEnter;