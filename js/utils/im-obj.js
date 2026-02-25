"use strict";

exports.__esModule = true;
exports.imObjUpdate = void 0;
const imObjUpdate = (obj, propName, propValue) => {
  obj[propName] = propValue;
  return {
    ...obj
  };
};
exports.imObjUpdate = imObjUpdate;