import React from 'react'

import A from '../zhn/A'

const S = {
  ROOT : {
    lineHeight: 1.8
  },
  TEXT: {
    float: 'right',
    width: '80px'
  }
};

const RowInputType2 = ({
  style, styleInput,
  caption, initValue,
  onEnter=()=>{}
}) => (
  <div style={style}>
     {/*eslint-disable jsx-a11y/label-has-for*/}
     <label style={{ ...S.ROOT }}>
       <span>{caption}</span>
       <A.InputText
         style={{ ...S.TEXT, ...styleInput }}
         initValue={initValue}
         onEnter={onEnter}
        />
     </label>
     {/*eslint-enable jsx-a11y/label-has-for*/}
  </div>
);

export default RowInputType2
