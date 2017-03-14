
const fn = {
  toCssValue: (boxShadow) => {
    const {
            vLength, gLength,
            blurR, spreadR,
            opacity
          } = boxShadow;
    return `${vLength}px ${gLength}px ${blurR}px ${spreadR}px rgba(0, 0, 0, ${opacity})`;
  }
}

export default fn
