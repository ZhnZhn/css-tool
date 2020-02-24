import React from 'react'

import A from '../zhn/A'
import S from './style'


const RowInputType2 = ({
  styleInput,
  caption, initValue,
  onEnter=()=>{}
}) => (
  <div className={S.CL_ROW}>
     {/*eslint-disable jsx-a11y/label-has-for*/}
     <label className={S.CL_CAPTION}>
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
