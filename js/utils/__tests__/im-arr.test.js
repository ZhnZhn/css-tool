"use strict";

var _globals = require("@jest/globals");
var _imArr = require("../im-arr");
(0, _globals.describe)('imArr', () => {
  (0, _globals.test)('should immutable insert value to array', () => {
    const _arrIn = [1, 2],
      _arrOut = (0, _imArr.imArrInsert)(_arrIn, 1, 3);
    (0, _globals.expect)(_arrOut).toEqual([1, 3, 2]);
    (0, _globals.expect)(_arrOut).not.toBe(_arrIn);
  });
  (0, _globals.test)('should immutable update value in array', () => {
    const _arrIn = [1, 2],
      _arrOut = (0, _imArr.imArrUpdate)(_arrIn, 0, 3);
    (0, _globals.expect)(_arrOut).toEqual([3, 2]);
    (0, _globals.expect)(_arrOut).not.toBe(_arrIn);
  });
  (0, _globals.test)('should immutable remove value from array', () => {
    const _arrIn = [1, 2],
      _arrOut = (0, _imArr.imArrRemove)(_arrIn, 0);
    (0, _globals.expect)(_arrOut).toEqual([2]);
    (0, _globals.expect)(_arrOut).not.toBe(_arrIn);
  });
});