import tinycolor from 'tinycolor2'

const fn = {
  toCssValue: (boxShadow) => {
    const {
            vLength, gLength,
            blurR, spreadR,
            color, opacity
          } = boxShadow
        , cRgb = tinycolor(color).toRgb();
    return `${vLength}px ${gLength}px ${blurR}px ${spreadR}px rgba(${cRgb.r}, ${cRgb.g}, ${cRgb.b}, ${opacity})`;
  }
}

export default fn
