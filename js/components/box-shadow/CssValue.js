"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _preact = require("preact");

var _RaisedButton = _interopRequireDefault(require("../zhn/RaisedButton"));

var _fn = _interopRequireDefault(require("./helpers/fn"));

var CL = "page-sb__css";
var S = {
  TITLE: {
    color: '#80c040',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  VALUE: {
    color: 'darkslateblue',
    fontSize: '20px'
  },
  EDITED: {
    borderBottom: '2px solid green'
  },
  BT: {
    width: 70
  },
  BT_R: {
    width: 100
  }
};

var _renderValues = function _renderValues(options) {
  var _options$boxShadows = options.boxShadows,
      boxShadows = _options$boxShadows === void 0 ? [] : _options$boxShadows,
      currentIndex = options.currentIndex,
      onAdd = options.onAdd,
      onEdit = options.onEdit,
      onRemove = options.onRemove;
  var max = boxShadows.length - 1;
  return boxShadows.map(function (item, index) {
    var _sufix = index !== max ? "," : ";",
        _styleValue = index === currentIndex ? S.EDITED : null;

    return (0, _preact.h)("div", {
      key: index
    }, (0, _preact.h)("span", {
      style: (0, _extends2["default"])({}, S.VALUE, {}, _styleValue)
    }, "" + _fn["default"].toCssValue(item) + _sufix), (0, _preact.h)(_RaisedButton["default"], {
      style: S.BT,
      caption: "EDIT",
      onClick: onEdit.bind(null, index)
    }), (0, _preact.h)(_RaisedButton["default"], {
      style: S.BT,
      caption: "ADD",
      onClick: onAdd.bind(null, index)
    }), index !== 0 && (0, _preact.h)(_RaisedButton["default"], {
      style: S.BT_R,
      caption: "REMOVE",
      onClick: onRemove.bind(null, index)
    }));
  });
};

var CssValue = function CssValue(props) {
  return (0, _preact.h)("div", {
    className: CL
  }, (0, _preact.h)("div", {
    style: S.TITLE
  }, "BOX-SHADOW:"), _renderValues(props));
};
/*
CssValue.propTypes = {
  boxShadows: PropTypes.arrayOf(
    PropTypes.shape({
      gLength: PropTypes.number,
      vLength: PropTypes.number,
      blurR: PropTypes.number,
      spreadR: PropTypes.number,
      opacity: PropTypes.number
    })
  ),
  currentIndex: PropTypes.number,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
}
*/


var _default = CssValue;
exports["default"] = _default;
//# sourceMappingURL=CssValue.js.map