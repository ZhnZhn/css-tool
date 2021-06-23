import type { FC, CSSProperties } from '../types';
import hooks from '../hooks';

import A from '../zhn/A';
import STYLE from './style';

const { useCallback } = hooks;

interface RowCheckBoxProps {
  value: boolean;
  caption: string;
  onCheck: () => void
  onUnCheck: () => void
}

const S_ROW: CSSProperties = {
  lineHeight: 'unset',
  marginTop: 6
}

const RowCheckBox: FC<RowCheckBoxProps, false> = ({
  value,
  caption,
  onCheck,
  onUnCheck
}) => {
  const _toggleValue = useCallback(()=>{
    if (value) { onUnCheck() }
    else { onCheck() }
  },[ value, onUnCheck, onCheck ]);
  return (
    <div className={STYLE.CL_ROW} style={S_ROW}>
      <A.SvgCheckBox
        value={value}
        onCheck={onCheck}
        onUnCheck={onUnCheck}
      />
      {
        caption && (
          <button
            className={STYLE.CL_CHB_BT}
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
