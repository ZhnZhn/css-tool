"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _pageConfig = require("./pageConfig");
var _pageReducer = _interopRequireDefault(require("./pageReducer"));
const usePageState = () => {
  const [state, dispatch] = (0, _uiApi.useReducer)(_pageReducer.default, _pageConfig.INITIAL_STATE),
    _handlers = (0, _uiApi.useMemo)(() => [(propName, value) => dispatch({
      type: _pageConfig.UPDATE_SHADOWS,
      propName,
      value
    }), (propName, value) => dispatch({
      type: _pageConfig.UPDATE_CONFIG,
      propName,
      value
    }), bsIndex => dispatch({
      type: _pageConfig.ADD_SHADOW,
      bsIndex
    }), bsIndex => dispatch({
      type: _pageConfig.SET_CURRENT_SHADOW,
      bsIndex
    }), bsIndex => dispatch({
      type: _pageConfig.REMOVE_SHADOW,
      bsIndex
    })], []);
  return [state, ..._handlers];
};
var _default = exports.default = usePageState;