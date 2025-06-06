import type { CSSProperties } from '../types';

interface AppLabelProps {
  className?: string;
  style?: CSSProperties;
  caption: string; 
}

const AppLabel = ({ 
  className, 
  style, 
  caption 
}: AppLabelProps) => (
  <span className={className} style={style}>
    {caption}
  </span>
);



export default AppLabel
