//preact/compat memo.js
import { createElement } from 'preact';

function assign(obj, props) {
	for (let i in props) obj[i] = props[i];
	return (obj);
}

function shallowDiffers(a, b) {
	for (let i in a) if (i !== '__source' && !(i in b)) return true;
	for (let i in b) if (i !== '__source' && a[i] !== b[i]) return true;
	return false;
}

export default function memo(c, comparer) {
	function shouldUpdate(nextProps) {
		let ref = this.props.ref;
		let updateRef = ref == nextProps.ref;
		if (!updateRef && ref) {
			ref.call ? ref(null) : (ref.current = null);
		}

		if (!comparer) {
			return shallowDiffers(this.props, nextProps);
		}

		return !comparer(this.props, nextProps) || !updateRef;
	}

	function Memoed(props) {
		this.shouldComponentUpdate = shouldUpdate;
		return createElement(c, assign({}, props));
	}
	Memoed.prototype.isReactComponent = true;
	Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
	Memoed._forwarded = true;
	return Memoed;
}
