"use strict";

exports.__esModule = true;
exports["default"] = memo;

var _preact = require("preact");

//preact/compat memo.js
function assign(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function shallowDiffers(a, b) {
  for (var i in a) {
    if (i !== '__source' && !(i in b)) return true;
  }

  for (var _i in b) {
    if (_i !== '__source' && a[_i] !== b[_i]) return true;
  }

  return false;
}

function memo(c, comparer) {
  function shouldUpdate(nextProps) {
    var ref = this.props.ref;
    var updateRef = ref == nextProps.ref;

    if (!updateRef && ref) {
      ref.call ? ref(null) : ref.current = null;
    }

    if (!comparer) {
      return shallowDiffers(this.props, nextProps);
    }

    return !comparer(this.props, nextProps) || !updateRef;
  }

  function Memoed(props) {
    this.shouldComponentUpdate = shouldUpdate;
    return (0, _preact.createElement)(c, assign({}, props));
  }

  Memoed.prototype.isReactComponent = true;
  Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
  Memoed._forwarded = true;
  return Memoed;
}
//# sourceMappingURL=memo.js.map