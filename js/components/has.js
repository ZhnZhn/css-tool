"use strict";

exports.__esModule = true;
exports.HAS_TOUCH_EVENTS = void 0;
const _isTouchable = () => document && 'ontouchstart' in document.documentElement;
const HAS_TOUCH_EVENTS = exports.HAS_TOUCH_EVENTS = _isTouchable();