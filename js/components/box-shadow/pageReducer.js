"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var _imArr = _interopRequireDefault(require("../../utils/im-arr"));

var _imObj = _interopRequireDefault(require("../../utils/im-obj"));

var A = {
  SET_CURRENT_SHADOW: 'SET_CURRENT_SHADOW',
  UPATE_SHADOWS: 'UPDATE_SHADOWS',
  ADD_SHADOW: 'ADD_SHADOW',
  REMOVE_SHADOW: 'REMOVE_SHADOW',
  UPDATE_CONFIG: 'UPDATE_CONFIG'
};
var DF_INITIAL_VALUE = {
  isInset: false,
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75,
  id: (0, _crId["default"])()
};
var INITIAL_STATE = {
  initValue: DF_INITIAL_VALUE,
  currentIndex: 0,
  boxShadows: [DF_INITIAL_VALUE],
  configStyle: {
    bgColor: 'gray',
    boxColor: '#e7a61a',
    boxBorderRadius: '0px'
  }
};

var pageReducer = function pageReducer(state, action) {
  switch (action.type) {
    case A.SET_CURRENT_SHADOW:
      {
        var editIndex = action.editIndex,
            boxShadows = state.boxShadows;
        return (0, _extends2["default"])({}, state, {
          currentIndex: editIndex,
          initValue: _imObj["default"].create(boxShadows[editIndex])
        });
      }

    case A.UPDATE_SHADOWS:
      {
        var boxShadow = action.boxShadow,
            _boxShadows = state.boxShadows,
            currentIndex = state.currentIndex;
        return (0, _extends2["default"])({}, state, {
          initValue: _imObj["default"].create(boxShadow),
          boxShadows: _imArr["default"].update(_boxShadows, currentIndex, boxShadow)
        });
      }

    case A.ADD_SHADOW:
      {
        var fromIndex = action.fromIndex,
            _boxShadows2 = state.boxShadows,
            _currentIndex = state.currentIndex,
            value = _boxShadows2[fromIndex],
            initValue = _imObj["default"].create(value),
            _index = _currentIndex + 1;

        initValue.id = (0, _crId["default"])(_index);
        return (0, _extends2["default"])({}, state, {
          initValue: initValue,
          currentIndex: _index,
          boxShadows: _imArr["default"].insert(_boxShadows2, _index, initValue)
        });
      }

    case A.REMOVE_SHADOW:
      {
        var removeIndex = action.removeIndex;

        if (removeIndex === 0) {
          return state;
        }

        var _boxShadows3 = state.boxShadows,
            _index2 = removeIndex - 1;

        return (0, _extends2["default"])({}, state, {
          currentIndex: _index2,
          initValue: _imObj["default"].create(_boxShadows3[_index2]),
          boxShadows: _imArr["default"].remove(_boxShadows3, removeIndex)
        });
      }

    case A.UPDATE_CONFIG:
      {
        var propName = action.propName,
            _value = action.value,
            configStyle = state.configStyle;
        return (0, _extends2["default"])({}, state, {
          configStyle: _imObj["default"].update(configStyle, propName, _value)
        });
      }

    default:
      throw new Error('Unsupported action type: ' + action.type);
  }
};

pageReducer.A = A;
pageReducer.INITIAL_STATE = INITIAL_STATE;
var _default = pageReducer;
exports["default"] = _default;
//# sourceMappingURL=pageReducer.js.map