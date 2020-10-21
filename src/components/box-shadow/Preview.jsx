import fn from './helpers/fn'

const CL = {
  PREVIEW: "page-sb__preview",
  INNER: "page-sb__preview__inner"
};

const _crBoxShadowStyle = boxShadows => ({
  boxShadow: boxShadows.map(fn.toCssValue).join(',')
});

const Preview = ({ boxShadows=[], configStyle={} }) => {
   const _style = _crBoxShadowStyle(boxShadows)
   , { bgColor, boxColor, boxBorderRadius } = configStyle
   , _rootStyle = { backgroundColor: bgColor }
   , _boxStyle = {
        backgroundColor: boxColor,
        borderRadius: boxBorderRadius
      };
   return (
     <div className={CL.PREVIEW} style={_rootStyle}>
       <div className={CL.INNER} style={{ ..._boxStyle, ..._style }} />
     </div>
   );
};

/*
Preview.propTypes = {
  boxShadows: PropTypes.arrayOf(
    PropTypes.shape({
      gLength: PropTypes.number,
      vLength: PropTypes.number,
      blurR: PropTypes.number,
      spreadR: PropTypes.number,
      opacity: PropTypes.number
    })
  ),
  configStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    boxColor: PropTypes.string,
    borderRadius: PropTypes.string
  })
}
*/

export default Preview
