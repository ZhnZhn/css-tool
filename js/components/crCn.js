"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = function () {
  const _cl1 = _getCn(arguments.length <= 0 ? undefined : arguments[0]),
    _cl2 = _getCn(arguments.length <= 1 ? undefined : arguments[1]);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
var _default = exports.default = crCn;