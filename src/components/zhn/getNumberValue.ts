const _isNaN = Number.isNaN || isNaN;

const getNumberValue = (
  value: unknown, 
  min: number, 
  max: number
): [number | string, boolean] => {
  if (value === '' || value === '-') {
    return [value, false];
  }
  const _v = parseFloat(''+value)
  , _value = _isNaN(_v) 
    ? min 
    : _v > max
        ? max
        : _v < min ? min : _v;
  return [_value, true];
};

export default getNumberValue