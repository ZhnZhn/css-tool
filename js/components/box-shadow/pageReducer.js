"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crId = _interopRequireDefault(require("../../utils/crId"));
var _isTypeFn = require("../../utils/isTypeFn");
var _imArr = require("../../utils/im-arr");
var _imObj = require("../../utils/im-obj");
var _pageConfig = require("./pageConfig");
function updateBoxShadow(boxShadow, propName, value) {
  /*
  if (typeof value !== typeof boxShadow[propName]) {
    throw new Error(`Invalid type for property ${propName}`);
  }*/
  boxShadow[propName] = value;
}
const pageReducer = (state, action) => {
  const actionType = action.type;
  switch (actionType) {
    case _pageConfig.SET_CURRENT_SHADOW:
      {
        const {
          bsIndex
        } = action;
        return (0, _isTypeFn.isNumber)(bsIndex) ? {
          ...state,
          currentIndex: bsIndex
        } : state;
      }
    case _pageConfig.UPDATE_SHADOWS:
      {
        const {
          propName,
          value
        } = action;
        if (!(0, _isTypeFn.isStr)(propName)) {
          return state;
        }
        const {
            boxShadows,
            currentIndex
          } = state,
          boxShadow = state.boxShadows[state.currentIndex];
        updateBoxShadow(boxShadow, propName, value);
        return {
          ...state,
          boxShadows: (0, _imArr.imArrUpdate)(boxShadows, currentIndex, boxShadow)
        };
      }
    case _pageConfig.ADD_SHADOW:
      {
        const {
          bsIndex
        } = action;
        if (!(0, _isTypeFn.isNumber)(bsIndex)) {
          return state;
        }
        const {
            boxShadows,
            currentIndex
          } = state,
          _initValue = {
            ...boxShadows[bsIndex]
          },
          _index = currentIndex + 1;
        _initValue.id = (0, _crId.default)('' + _index);
        return {
          ...state,
          currentIndex: _index,
          boxShadows: (0, _imArr.imArrInsert)(boxShadows, _index, _initValue)
        };
      }
    case _pageConfig.REMOVE_SHADOW:
      {
        const {
          bsIndex
        } = action;
        if (!(0, _isTypeFn.isNumber)(bsIndex) || bsIndex === 0) {
          return state;
        }
        const {
            boxShadows
          } = state,
          _index = bsIndex - 1;
        return {
          ...state,
          currentIndex: _index,
          boxShadows: (0, _imArr.imArrRemove)(boxShadows, bsIndex)
        };
      }
    case _pageConfig.UPDATE_CONFIG:
      {
        const {
          propName,
          value
        } = action;
        if (!(0, _isTypeFn.isStr)(propName) || !(0, _isTypeFn.isStr)(value)) {
          return state;
        }
        const {
          configStyle
        } = state;
        return {
          ...state,
          configStyle: (0, _imObj.imObjUpdate)(configStyle, propName, value)
        };
      }
    default:
      {
        const _neverActionType = actionType;
        throw new Error('Unsupported action type: ' + _neverActionType);
      }
  }
};
var _default = exports.default = pageReducer;