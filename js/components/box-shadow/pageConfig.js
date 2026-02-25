"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.UPDATE_SHADOWS = exports.UPDATE_CONFIG = exports.SET_CURRENT_SHADOW = exports.REMOVE_SHADOW = exports.INITIAL_STATE = exports.ADD_SHADOW = void 0;
var _crId = _interopRequireDefault(require("../../utils/crId"));
const SET_CURRENT_SHADOW = exports.SET_CURRENT_SHADOW = 'SET_CURRENT_SHADOW';
const UPDATE_SHADOWS = exports.UPDATE_SHADOWS = 'UPDATE_SHADOWS';
const ADD_SHADOW = exports.ADD_SHADOW = 'ADD_SHADOW';
const REMOVE_SHADOW = exports.REMOVE_SHADOW = 'REMOVE_SHADOW';
const UPDATE_CONFIG = exports.UPDATE_CONFIG = 'UPDATE_CONFIG';
const DF_SHADOW = {
  isInset: false,
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75,
  id: (0, _crId.default)()
};
const INITIAL_STATE = exports.INITIAL_STATE = {
  currentIndex: 0,
  boxShadows: [DF_SHADOW],
  configStyle: {
    bgColor: 'grey',
    boxColor: '#e7a61a',
    boxBorderRadius: '0px'
  }
};