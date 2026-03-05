import type { ShadowType } from './types';
import { toRgb } from '../../colors/transformFn'


export const CL_PREVIEW = "page-sb__preview"
export const CL_PREVIEW_INNER = `${CL_PREVIEW}__inner`

export const toRgba = (
  color: string
): string => {    
  const [r, g, b] = toRgb(color);
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
}: ShadowType): string => {    
  const _strCss = [
    gLength, 
    vLength, 
    blurR, 
    spreadR
  ].join('px ') + 'px'
  , _prefix = isInset
      ? 'inset ' + _strCss
      : _strCss;
  return `${_prefix} ${toRgba(color)} ${opacity})`;  
}