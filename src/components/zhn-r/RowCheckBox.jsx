import hooks from '../hooks'

import A from '../zhn/A'
import STYLE from './style'

const { useCallback } = hooks;

const S = {
  ROW: {
    marginTop: 6
  }
};

const RowCheckBox = ({
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
    <div className={STYLE.CL_ROW} style={S.ROW}>
      <A.SvgCheckBox
        value={value}
        onCheck={onCheck}
        onUnCheck={onUnCheck}
      />
      {
        caption && (
          <button
            className={STYLE.CL_CHB_BT}
            tabIndex="-1"
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
