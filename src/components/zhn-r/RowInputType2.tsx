import type { FC, CSSProperties } from '../types';

import A from '../zhn/A';
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

const RowInputType2: FC<RowInputType2Props, false> = ({
  styleInput,
  caption, 
  initValue,
  onEnter
}) => (
  <div className={CL_ROW}>
     {/*eslint-disable jsx-a11y/label-has-for*/}
     <label className={CL_CAPTION}>
       <span>{caption}</span>
       <A.InputText
         style={{...S_TEXT, ...styleInput}}
         initValue={initValue}
         onEnter={onEnter}
        />
     </label>
     {/*eslint-enable jsx-a11y/label-has-for*/}
  </div>
);

export default RowInputType2
