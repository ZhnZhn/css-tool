import type { FC, CSSProperties } from "../types";

const S_CIRCLE_INNER: CSSProperties = {    
  position: 'absolute',
  top: 0,
  left: 0,
  width: 12,
  height: 12,
  overflow: 'visible'      
}
, S_CIRCLE_INNER_EL: CSSProperties = {
  position: 'absolute',
  top: -12,
  left: -12,
  width: '300%',
  height: 36,
  borderRadius: '50%',
  //opacity: '0.16',
  backgroundColor: 'rgba(0, 188, 212, 0.16)',
  //transform: 'scale(1)'
};

export interface CircleInnerProps {
  is: boolean;
  circleStyle?: CSSProperties;
  emberStyle?: CSSProperties;
}

const CircleInner: FC<CircleInnerProps, false> = ({ 
   is,
   circleStyle,
   emberStyle
}) => (
  <div style={{...S_CIRCLE_INNER, ...circleStyle}}>
    {is
      ? <div style={{...S_CIRCLE_INNER_EL, ...emberStyle}} />
      : null
    }    
  </div>
);

export default CircleInner