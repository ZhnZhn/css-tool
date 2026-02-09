import { 
  _isNaN,
  isNumber 
} from "./isTypeFn";

export const round10 = (
  value: number | string, 
  exp: number | string | null | undefined
): number => {
  if (exp == null) {
    return NaN;
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(isNumber(exp) && exp % 1 === 0)) {
    return NaN;
  }
  // Shift      
  let _arrV = value.toString().split('e');
  value = Math.round(+(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] - exp) : -exp)));
  // Shift back
  _arrV = value.toString().split('e');
  return +(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] + exp) : exp));
}

export const toPercent = (
  value: number, 
  min: number, 
  max: number
): number => {
  const _percent = (value - min ) / (max - min);
  return _isNaN(_percent)
    ? 0
    : _percent*100;
}