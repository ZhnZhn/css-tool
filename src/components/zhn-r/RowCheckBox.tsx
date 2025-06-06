import type { CSSProperties } from '../types';
import { useCallback } from '../uiApi';

import SvgCheckBox from '../zhn/SvgCheckBox';
import { 
  CL_ROW,
  CL_CHB_BT 
} from './style';

export interface RowCheckBoxProps {
  id?: string; 
  value: boolean;
  caption: string;  
  onCheck: () => void
  onUnCheck: () => void
}

const S_ROW: CSSProperties = {
  lineHeight: 'unset',
  marginTop: 6
}

const RowCheckBox = ({
  id,
  value,
  caption,  
  onCheck,
  onUnCheck
}: RowCheckBoxProps) => {
  const _toggleValue = useCallback(()=>{
    if (value) { onUnCheck() }
    else { onCheck() }
  },[ value, onUnCheck, onCheck ]);
  return (
    <div className={CL_ROW} style={S_ROW}>
      <SvgCheckBox
        id={id}
        value={value}
        onCheck={onCheck}
        onUnCheck={onUnCheck}
      />
      {
        caption && (
          <button
            className={CL_CHB_BT}
            tabIndex={-1}
            onClick={_toggleValue}
          >
            {caption}
          </button>
        )
      }
    </div>
  );
};

export default RowCheckBox
