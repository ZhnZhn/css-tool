"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _preact = require("preact");

var _hooks = _interopRequireDefault(require("../hooks"));

var _pageReducer = _interopRequireDefault(require("./pageReducer"));

var _InputBox = _interopRequireDefault(require("./InputBox"));

var _InputShadow = _interopRequireDefault(require("./InputShadow"));

var _ViewBoxShadow = _interopRequireDefault(require("./ViewBoxShadow"));

var useReducer = _hooks["default"].useReducer,
    useCallback = _hooks["default"].useCallback;
var CL = {
  PAGE: "page-sb",
  INPUTS: "page-sb__inputs",
  VIEWS: "page-sb__views"
};
var A = _pageReducer["default"].A,
    INITIAL_STATE = _pageReducer["default"].INITIAL_STATE;

var Page = function Page(_ref) {
  var isShadow = _ref.isShadow,
      isBox = _ref.isBox;

  var _useReducer = useReducer(_pageReducer["default"], INITIAL_STATE),
      state = _useReducer[0],
      dispatch = _useReducer[1],
      currentIndex = state.currentIndex,
      boxShadows = state.boxShadows,
      configStyle = state.configStyle,
      _currentValue = boxShadows[currentIndex],
      id = _currentValue.id,
      isInset = _currentValue.isInset,
      _updateShadows = useCallback(function (boxShadow) {
    return dispatch({
      type: A.UPDATE_SHADOWS,
      boxShadow: boxShadow
    });
  }, []),
      _updateConfig = useCallback(function (propName, value) {
    return dispatch({
      type: A.UPDATE_CONFIG,
      propName: propName,
      value: value
    });
  }, []),
      _addShadow = useCallback(function (fromIndex) {
    return dispatch({
      type: A.ADD_SHADOW,
      fromIndex: fromIndex
    });
  }, []),
      _setCurrentShadow = useCallback(function (editIndex) {
    return dispatch({
      type: A.SET_CURRENT_SHADOW,
      editIndex: editIndex
    });
  }, []),
      _removeShadow = useCallback(function (removeIndex) {
    return dispatch({
      type: A.REMOVE_SHADOW,
      removeIndex: removeIndex
    });
  }, []);

  return (0, _preact.h)("div", {
    className: CL.PAGE
  }, (0, _preact.h)("div", {
    className: CL.INPUTS
  }, (0, _preact.h)(_InputBox["default"], {
    key: "input-box",
    isBox: isBox,
    configStyle: configStyle,
    onEnter: _updateConfig
  }), (0, _preact.h)(_InputShadow["default"], {
    key: "input-shadow",
    id: id,
    isShadow: isShadow,
    isInset: isInset,
    initValue: _currentValue,
    onChange: _updateShadows
  })), (0, _preact.h)("div", {
    className: CL.VIEWS
  }, (0, _preact.h)(_ViewBoxShadow["default"], {
    currentIndex: currentIndex,
    boxShadows: boxShadows,
    configStyle: configStyle,
    onAdd: _addShadow,
    onEdit: _setCurrentShadow,
    onRemove: _removeShadow
  })));
};

var _default = Page;
exports["default"] = _default;
//# sourceMappingURL=Page.js.map