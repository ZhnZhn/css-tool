import type { FC, CSSProperties } from '../types';

import S from './RaisedButtonStyle'

const CL_BT_DIV = "bt-div";

export interface RaisedButtonProps {
  style?: CSSProperties,
  caption: string,
  onClick?: () => void
}

const _fnNoop = () => {};

const RaisedButton: FC<RaisedButtonProps, false> = ({
  style, caption,
  onClick=_fnNoop
}) => (
  <div style={{...S.ROOT, ...style}}>
    <button
      style={S.BT}
      onClick={onClick}
    >
      <div
        className={CL_BT_DIV}
        style={S.DIV}
      >
        <span style={S.CAPTION}>
          {caption}
        </span>
      </div>
    </button>
  </div>
);

export default RaisedButton
