import React, { useCallback } from 'react'

import A from '../zhn/A'

const CL = "bt-chb";

const S = {
  ROOT: {
    lineHeight: 1.8,
    paddingTop: 6,
    paddingLeft: 16
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
    <div style={S.ROOT}>
      <A.SvgCheckBox
        value={value}
        onCheck={onCheck}
        onUnCheck={onUnCheck}
      />
      {
        caption && (
          <button
            className={CL}
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
