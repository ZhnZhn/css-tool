import type { 
  PropsWithChildren,
  SVGProps 
} from "../types";

interface CompSvgProps extends Omit<SVGProps<SVGSVGElement>, 'xmlns'> {
   w: number | string;      
   h?: number | string | undefined;      
};

const Svg = ({
  w,
  h=w,  
  children,
  ...restProps
}: PropsWithChildren<CompSvgProps>) => (
   <svg
     viewBox={`0 0 ${w} ${h}`}     
     fill-rule="evenodd"
     clip-rule="evenodd"
     stroke-linejoin="round"
     {...restProps}     
     xmlns="http://www.w3.org/2000/svg"     
   >
     {children}
   </svg> 
)

export default Svg