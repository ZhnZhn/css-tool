"use strict";

exports.__esModule = true;
exports.default = memo;
var _jsxRuntime = require("preact/jsx-runtime");
//preact/compat memo.js
//import { createElement } from 'preact';

//https://github.com/preactjs/preact/blob/master/compat/src/index.d.ts
/*
export function memo<P = {}>(
	component: preact.FunctionalComponent<P>,
	comparer?: (prev: P, next: P) => boolean
): preact.FunctionComponent<P>;
export function memo<C extends preact.FunctionalComponent<any>>(
	component: C,
	comparer?: (
		prev: preact.ComponentProps<C>,
		next: preact.ComponentProps<C>
	) => boolean
): C;
*/

/*
export declare function memo<T extends ComponentType<any>>(
	Component: T,
	propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean
): MemoExoticComponent<T>;
*/

/*
function assign(obj, props) {
	for (const i in props) obj[i] = props[i];
	return (obj);
}
*/

function shallowDiffers(a, b) {
  for (const i in a) if (i !== '__source' && !(i in b)) return true;
  for (const i in b) if (i !== '__source' && a[i] !== b[i]) return true;
  return false;
}
function memo(Comp, comparer) {
  function shouldUpdate(nextProps) {
    const ref = this.props.ref;
    const updateRef = ref == nextProps.ref;
    if (!updateRef && ref) {
      if (ref.call) {
        ref(null);
      } else {
        ref.current = null;
      }
      //ref.call ? ref(null) : (ref.current = null);
    }
    if (!comparer) {
      return shallowDiffers(this.props, nextProps);
    }
    return !comparer(this.props, nextProps) || !updateRef;
  }
  function Memoed(props) {
    this.shouldComponentUpdate = shouldUpdate;
    return (0, _jsxRuntime.jsx)(Comp, {
      ...props
    });
    //return createElement(c, assign({}, props));
  }
  Memoed.prototype.isReactComponent = true;
  //Memoed.displayName = 'Memo(' + (Comp.displayName || Comp.name) + ')';
  //Memoed._forwarded = true;
  return Memoed;
}