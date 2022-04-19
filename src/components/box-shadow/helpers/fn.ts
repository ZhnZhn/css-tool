import type { ShadowType } from '../types';
import tinycolor from 'tinycolor2';

const _toRgb = (
  color: string
) => tinycolor(color).toRgb();

export const toRgba = (
  { color }: ShadowType
): string => {    
  const {r, g, b} = _toRgb(color);
  return `rgba(${r}, ${g}, ${b},`;
}

export const toCssValue = ({
    isInset,
    vLength, 
    gLength,
    blurR, 
    spreadR,
    color, 
    opacity
  }: ShadowType
  ): string => {    
  const _strCss = [
    gLength+'px', 
    vLength+'px', 
    blurR+'px', 
    spreadR+'px'
  ].join(' ')
  , _prefix = isInset
      ? 'inset ' + _strCss
      : _strCss
  , {r, g, b} = _toRgb(color);
  return `${_prefix} rgba(${r}, ${g}, ${b}, ${opacity})`;
}