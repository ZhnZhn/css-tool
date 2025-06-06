import type { CSSProperties } from '../types';

import InputText from '../zhn/InputText';
import { 
  CL_ROW,
  CL_CAPTION,
  S_TEXT 
} from './style';

export interface RowInputType2Props {
  styleInput?: CSSProperties;
  caption: string;
  initValue?: string;
  onEnter?: (v: string) => void; 
}

const RowInputType2 = ({
  styleInput,
  caption, 
  initValue,
  onEnter
}: RowInputType2Props) => (
  <div className={CL_ROW}>
     {/*eslint-disable jsx-a11y/label-has-for*/}
     <label className={CL_CAPTION}>
       <span>{caption}</span>
       <InputText
         style={{...S_TEXT, ...styleInput}}
         initialValue={initValue}
         onEnter={onEnter}
        />
     </label>
     {/*eslint-enable jsx-a11y/label-has-for*/}
  </div>
);

export default RowInputType2
