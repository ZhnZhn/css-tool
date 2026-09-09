"use strict";

exports.__esModule = true;
exports.imArrUpdate = exports.imArrRemove = exports.imArrInsert = void 0;
const imArrInsert = (arr = [], index, value) => [...arr.slice(0, index), value, ...arr.slice(index)];
exports.imArrInsert = imArrInsert;
const imArrUpdate = (arr = [], index, value) => {
  arr[index] = value;
  return [...arr];
};
exports.imArrUpdate = imArrUpdate;
const imArrRemove = (arr = [], index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
exports.imArrRemove = imArrRemove;