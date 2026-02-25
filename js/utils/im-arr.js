"use strict";

exports.__esModule = true;
exports.imArrUpdate = exports.imArrRemove = exports.imArrInsert = void 0;
const imArrInsert = function (arr, index, value) {
  if (arr === void 0) {
    arr = [];
  }
  return [...arr.slice(0, index), value, ...arr.slice(index)];
};
exports.imArrInsert = imArrInsert;
const imArrUpdate = function (arr, index, value) {
  if (arr === void 0) {
    arr = [];
  }
  arr[index] = value;
  return [...arr];
};
exports.imArrUpdate = imArrUpdate;
const imArrRemove = function (arr, index) {
  if (arr === void 0) {
    arr = [];
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
exports.imArrRemove = imArrRemove;