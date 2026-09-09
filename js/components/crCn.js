"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (...args) => {
  const _cl1 = _getCn(args[0]),
    _cl2 = _getCn(args[1]);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
var _default = exports.default = crCn;