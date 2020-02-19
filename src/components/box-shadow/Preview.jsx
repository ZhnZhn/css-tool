import React from 'react'

import fn from './helpers/fn'

const S = {
  ROOT : {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 24
  },
  INNER : {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: 250,
    resize: 'both',
    overflow: 'auto'
  }
};


const _crBoxShadowStyle = boxShadows => ({
  boxShadow: boxShadows.map(fn.toCssValue).join(',')
});

const Preview = ({ boxShadows=[], configStyle }) => {
   const _style = _crBoxShadowStyle(boxShadows)
   , _rootStyle = { backgroundColor: configStyle.bgColor }
   , _boxStyle = {
        backgroundColor: configStyle.boxColor,
        borderRadius: configStyle.boxBorderRadius
      };
   return (
     <div style={{ ...S.ROOT, ..._rootStyle}}>
       <div style={{ ...S.INNER, ..._boxStyle, ..._style }} />
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
