"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pageReducer = _interopRequireDefault(require("./pageReducer"));

var _InputBoxShadow = _interopRequireDefault(require("./InputBoxShadow"));

var _ViewBoxShadow = _interopRequireDefault(require("./ViewBoxShadow"));

var CL = "page-sb";
var A = _pageReducer["default"].A,
    INITIAL_STATE = _pageReducer["default"].INITIAL_STATE;

var Page = function Page(_ref) {
  var isShadow = _ref.isShadow,
      isBox = _ref.isBox;

  var _useReducer = (0, _react.useReducer)(_pageReducer["default"], INITIAL_STATE),
      state = _useReducer[0],
      dispatch = _useReducer[1],
      currentIndex = state.currentIndex,
      initValue = state.initValue,
      boxShadows = state.boxShadows,
      configStyle = state.configStyle,
      _updateShadows = (0, _react.useCallback)(function (boxShadow) {
    return dispatch({
      type: A.UPDATE_SHADOWS,
      boxShadow: boxShadow
    });
  }, []),
      _updateConfig = (0, _react.useCallback)(function (propName, value) {
    return dispatch({
      type: A.UPDATE_CONFIG,
      propName: propName,
      value: value
    });
  }, []),
      _addShadow = (0, _react.useCallback)(function (fromIndex) {
    return dispatch({
      type: A.ADD_SHADOW,
      fromIndex: fromIndex
    });
  }, []),
      _setCurrentShadow = (0, _react.useCallback)(function (editIndex) {
    return dispatch({
      type: A.SET_CURRENT_SHADOW,
      editIndex: editIndex
    });
  }, []),
      _removeShadow = (0, _react.useCallback)(function (removeIndex) {
    return dispatch({
      type: A.REMOVE_SHADOW,
      removeIndex: removeIndex
    });
  }, []);

  return _react["default"].createElement("div", {
    className: CL
  }, _react["default"].createElement(_InputBoxShadow["default"], {
    isShadow: isShadow,
    isBox: isBox,
    initValue: initValue,
    configStyle: configStyle,
    onChange: _updateShadows,
    onEnter: _updateConfig
  }), _react["default"].createElement(_ViewBoxShadow["default"], {
    currentIndex: currentIndex,
    boxShadows: boxShadows,
    configStyle: configStyle,
    onAdd: _addShadow,
    onEdit: _setCurrentShadow,
    onRemove: _removeShadow
  }));
};

var _default = Page;
exports["default"] = _default;
//# sourceMappingURL=Page.js.map