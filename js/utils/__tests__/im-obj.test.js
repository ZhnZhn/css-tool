"use strict";

var _globals = require("@jest/globals");
var _imObj = require("../im-obj");
(0, _globals.describe)('imObjUpdate', () => {
  (0, _globals.test)('should immutable update object by propName', () => {
    const _objIn = {
        a: 'text'
      },
      _objOut = (0, _imObj.imObjUpdate)(_objIn, 'a', 'textUpdated');
    (0, _globals.expect)(_objOut).toEqual({
      a: 'textUpdated'
    });
    (0, _globals.expect)(_objOut).not.toBe(_objIn);
  });
});