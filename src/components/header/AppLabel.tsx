import type { CSSProperties } from '../types';

interface AppLabelProps {
  className?: string;
  style?: CSSProperties;
  caption: string; 
}

const AppLabel = (props: AppLabelProps) => (
  <span className={props.className} style={props.style}>
    {props.caption}
  </span>
);

export default AppLabel
