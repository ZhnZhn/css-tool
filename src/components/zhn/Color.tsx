import type { CSSProperties } from '../types';

export interface ColorProps {
  style: CSSProperties;
  value?: string;
  onClick?: () => void;
}

const CL_BOX_COLOR = 'box-color box-shadow';

const Color = (props: ColorProps) => {
  const _style = props.value
    ? { backgroundColor: props.value }
    : null;
  return (
    <button       
      type="button"
      className={CL_BOX_COLOR} 
      style={{...props.style, ..._style}} 
      onClick={props.onClick}
    />
  );
}

export default Color
