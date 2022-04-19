import type { FC, CSSProperties } from "../types";

const S_BLOCK: CSSProperties = { display: 'block' };
const S_NONE: CSSProperties = { display: 'none' };

export interface ShowHideProps {
  is: boolean;
  style?: CSSProperties;
} 

const ShowHide:FC<ShowHideProps> = ({
  is,
  style,
  children
}) => {
   const _style = is ? S_BLOCK : S_NONE;  
   return (
    <div style={{...style, ..._style}}>
      {children}
    </div>
   );
};

export default ShowHide