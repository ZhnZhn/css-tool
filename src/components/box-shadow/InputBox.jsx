import React, { useCallback } from 'react'

import A from '../Comp'

const S = {
  DIV: {
    marginBottom: 32
  },
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  }
};

const InputBox = ({
  isBox,
  configStyle,
  onEnter=()=>{}
}) => {
  const _handleEnter = useCallback((propName, value) => {
      onEnter(propName, value)
  }, []);

  if (!isBox) { return null; }

  const {
    bgColor,
    boxColor, boxBorderRadius
  } = configStyle;
  return (
    <div style={S.DIV}>
      <A.RowInputType3
         style={S.ROW_INPUT}
         styleInput={S.BOX_INPUT}
         caption="Background"
         initValue={bgColor}
         onEnter={_handleEnter.bind(null, 'bgColor')}
      />
      <A.RowInputType3
         style={S.ROW_INPUT}
         styleInput={S.BOX_INPUT}
         caption="Box Background"
         initValue={boxColor}
         onEnter={_handleEnter.bind(null, 'boxColor')}
      />
      <A.RowInputType2
         style={S.ROW_INPUT}
         styleInput={S.BOX_INPUT}
         caption="Box Border Radius"
         initValue={boxBorderRadius}
         onEnter={_handleEnter.bind(null, 'boxBorderRadius')}
      />
   </div>);
};

const _isNotShouldUpdate = ({
 isBox, configStyle,
}, nextProps
) => isBox === nextProps.isBox
  && configStyle === nextProps.configStyle
   ? true
   : false;

export default React.memo(InputBox, _isNotShouldUpdate)
