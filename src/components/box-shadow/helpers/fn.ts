import type { ShadowType } from '../types';
import tinycolor from 'tinycolor2';

type FnType = {
  toRgba(boxShadow: ShadowType): string;
  toCssValue(boxShadow: ShadowType): string
}

const fn: FnType = {
  toRgba: ({ color }) => {    
    const cRgb = tinycolor(color).toRgb();
    return `rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b},`
  },

  toCssValue: ({
    isInset,
    vLength, gLength,
    blurR, spreadR,
    color, opacity
  }) => {    
    const _strCss = [gLength+'px', vLength+'px', blurR+'px', spreadR+'px'].join(' ')
    , _prefix = isInset
        ? 'inset ' + _strCss
        : _strCss
    , cRgb = tinycolor(color).toRgb();
    return `${_prefix} rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, ${opacity})`;
  }
};

export default fn
