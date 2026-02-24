import type { CSSProperties } from '../types';

import InputText from '../zhn/InputText';
import { 
  CL_ROW,
  CL_CAPTION,
  S_TEXT 
} from './style';

export interface RowInputTextProps {
  caption: string;
  styleInput?: CSSProperties;
  initValue?: string;
  onEnter?: (v: string) => void; 
}

const RowInputText = (props: RowInputTextProps) => (
  <div className={CL_ROW}>     
     <label className={CL_CAPTION}>
       <span>{props.caption}</span>
       <InputText
         style={{...S_TEXT, ...props.styleInput}}
         initialValue={props.initValue}
         onEnter={props.onEnter}
        />
     </label>     
  </div>
);

export default RowInputText
