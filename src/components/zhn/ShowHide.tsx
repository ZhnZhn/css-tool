import type { 
  PropsWithChildren, 
  CSSProperties 
} from "../types";

const S_BLOCK: CSSProperties = { display: 'block' };
const S_NONE: CSSProperties = { display: 'none' };

export interface ShowHideProps {
  is: boolean;
  style?: CSSProperties;
} 

const ShowHide = ({
  is,
  style,
  children
}: PropsWithChildren<ShowHideProps>) => (
  <div style={{...style, ...(is ? S_BLOCK : S_NONE)}}>
    {children}
  </div>
);

export default ShowHide