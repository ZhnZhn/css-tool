"use strict";

exports.__esModule = true;
exports.getRefValue = getRefValue;
exports.useId = exports.useEffect = exports.useCallback = exports.safeMap = void 0;
exports.useImperativeHandleOr = useImperativeHandleOr;
exports.useState = exports.useReducer = exports.useMemo = void 0;
var _hooks = require("preact/hooks");
exports.useRef = _hooks.useRef;
exports.useId = _hooks.useId;
exports.useState = _hooks.useState;
exports.useReducer = _hooks.useReducer;
exports.useCallback = _hooks.useCallback;
exports.useMemo = _hooks.useMemo;
exports.useEffect = _hooks.useEffect;
function getRefValue(ref) {
  return ref.current;
}
function useImperativeHandleOr(ref, create, inputs) {
  const _ref = (0, _hooks.useRef)(null);
  /* eslint-disable react-hooks/exhaustive-deps */
  (0, _hooks.useImperativeHandle)(ref || _ref, create, inputs);
  /* eslint-enable react-hooks/exhaustive-deps */
}
const _isArr = Array.isArray;
const safeMap = (arrOr, fn) => _isArr(arrOr) ? arrOr.map(fn) : [];
exports.safeMap = safeMap;