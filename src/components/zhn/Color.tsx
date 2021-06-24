import type { FC, CSSProperties } from '../types';

export interface ColorProps {
  style: CSSProperties;
  value: string;
}

const CL_BOX_COLOR = 'box-color box-shadow';

const Color: FC<ColorProps, false> = ({ 
  style, 
  value 
}) => {
  const _style = value
    ? { backgroundColor: value }
    : null;
  return (
    <span 
      className={CL_BOX_COLOR} 
      style={{...style, ..._style}} 
    />
  );
}

export default Color
