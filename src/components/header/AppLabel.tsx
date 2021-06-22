import type { CSSProperties, FC } from '../types';

interface AppLabelProps {
  className?: string;
  style?: CSSProperties;
  caption: string; 
}

const AppLabel: FC<AppLabelProps, false> = ({ 
  className, 
  style, 
  caption 
}) => (
  <span className={className} style={style}>
    {caption}
  </span>
);



export default AppLabel
