
const _isNaN = Number.isNaN || isNaN;

type NumberOrString = number | string

type MathType = {
  round10(v: NumberOrString, exp: NumberOrString): number;
  toPercent(value: number, min: number, max: number): number;
}

const math: MathType = {
  round10: (value, exp) => {
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift      
      let _arrV = value.toString().split('e');
      value = Math.round(+(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] - exp) : -exp)));
      // Shift back
      _arrV = value.toString().split('e');

      return +(_arrV[0] + 'e' + (_arrV[1] ? (+_arrV[1] + exp) : exp));
  },

  toPercent: (value, min, max) => {
    const _percent = (value - min ) / (max - min);
    return _isNaN(_percent)
      ? 0
      : _percent*100;
  }
}

export default math
