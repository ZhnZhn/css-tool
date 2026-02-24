import { 
  _isNaN,
  isNumber 
} from "./isTypeFn";

const splitNumberByE = (
  n: number
) => ('' + n).split('e');

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
  let _arrV = splitNumberByE(value);   
  value = Math.round(+(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] - exp) : -exp)));
  // Shift back
  _arrV = splitNumberByE(value)  
  return +(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] + exp) : exp));
}

export const toPercent = (
  value: number, 
  min: number, 
  max: number
): number => {
  const percent = (value - min) / (max - min);
  return _isNaN(percent)
    ? 0
    : percent * 100;
}