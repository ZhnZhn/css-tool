import type { ShadowType } from './types';

import { toRgba } from './helpers/fn';
import CssToken from './CssToken';

interface CssValueProps {
  item: ShadowType;
  sufix: string;
}

const _crTokenTitle = (s: number) => `${s}px`;

const CssValue = (props: CssValueProps) => {
 const { 
   isInset,
   gLength, 
   vLength,
   blurR, 
   spreadR,
   opacity
 } = props.item;   
 return (
  <>
    {isInset && <CssToken title="inset" id="inset"/>}                      
    <CssToken 
      title={_crTokenTitle(gLength)}
      id="horizontal-length"             
    />            
    <CssToken 
      title={_crTokenTitle(vLength)}
      id="vertical-length"             
    />            
    <CssToken 
      title={_crTokenTitle(blurR)}
      id="blur-radius"
    />            
    <CssToken 
      title={_crTokenTitle(spreadR)}
      id="spread-radius"             
    />            
    <CssToken 
      title={toRgba(props.item)}
      id="shadow-color"             
    />            
    <CssToken 
      title={`${opacity})${props.sufix}`}
      id="opacity"             
    />                       
  </>
 );
}

export default CssValue