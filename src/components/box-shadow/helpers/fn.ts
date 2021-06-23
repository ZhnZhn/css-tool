import type { ShadowType } from '../types';
import tinycolor from 'tinycolor2';

type FnType = {
  toCssValue(boxShadow: ShadowType): string
}

const fn: FnType = {
  toCssValue: (boxShadow) => {
    const {
        isInset,
        vLength, gLength,
        blurR, spreadR,
        color, opacity
      } = boxShadow
    , _strCss = [vLength+'px', gLength+'px', blurR+'px', spreadR+'px']
        .join(' ')
    , _prefix = isInset
         ? 'inset ' + _strCss
         : _strCss
    , cRgb = tinycolor(color).toRgb();
    return `${_prefix} rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, ${opacity})`;
  }
};

export default fn
