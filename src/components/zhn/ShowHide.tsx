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

const ShowHide = (props: PropsWithChildren<ShowHideProps>) => (
  <div style={{...props.style, ...(props.is ? S_BLOCK : S_NONE)}}>
    {props.children}
  </div>
);

export default ShowHide