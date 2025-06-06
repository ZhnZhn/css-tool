import type { CSSProperties } from '../types';

export interface ColorProps {
  style: CSSProperties;
  value: string;
  onClick?: () => void;
}

const CL_BOX_COLOR = 'box-color box-shadow';

const Color = ({ 
  style, 
  value,
  onClick 
}: ColorProps) => {
  const _style = value
    ? { backgroundColor: value }
    : null;
  return (
    <button       
      className={CL_BOX_COLOR} 
      style={{...style, ..._style}} 
      onClick={onClick}
    />
  );
}

export default Color
