import type { CSSProperties, FC } from '../types';
import tinycolor from 'tinycolor2';
import { 
  useState, 
  useCallback 
} from '../uiApi';

import A from '../zhn/A';
import {
  CL_ROW,
  CL_CAPTION,
  S_TEXT,
  S_COLOR
} from './style';

export interface RowInputType3Props {  
  id?: string;
  styleInput?: CSSProperties
  caption: string;  
  inputId?: string;
  initValue: string;
  onEnter: (value: string, color: tinycolor.Instance) => void
}

const _FN_NOOP = () => {};

const RowInputType3: FC<RowInputType3Props, false> = ({   
  id,
  styleInput,
  caption,  
  inputId,
  initValue,
  onEnter=_FN_NOOP
}) => {
  const [value, setValue] = useState(initValue)  
  , _hEnter = useCallback((value: string) => {
    const color = tinycolor(value);
     if (color.isValid()){
       onEnter(value, color)
       setValue(color.toHexString())
     }
  }, [onEnter]);  

  return (
   <div className={CL_ROW}>
      {/*eslint-disable jsx-a11y/label-has-for*/}
      <label className={CL_CAPTION}>
        <span>{caption}</span>
        <A.InputText
           id={id}
           style={{...S_TEXT, ...styleInput}}
           inputId={inputId}           
           initValue={value}
           onEnter={_hEnter}
         />
         <A.Color
           style={S_COLOR}
           value={value}
         />
      </label>
      {/*eslint-enable jsx-a11y/label-has-for*/}
    </div>
  );
}

export default RowInputType3
