import type { ShadowType } from './types';

import { toRgba } from './helpers/fn';
import CssToken from './CssToken';

interface CssValueProps {
  item: ShadowType;
  sufix: string;
}

const _crTokenTitle = (s: number) => `${s}px`;

const CssValue = ({ 
  item, 
  sufix 
}: CssValueProps) => {
 const { 
   isInset,
   gLength, vLength,
   blurR, spreadR,
   opacity
 } = item;   
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
      title={toRgba(item)}
      id="shadow-color"             
    />            
    <CssToken 
      title={`${opacity})${sufix}`}
      id="opacity"             
    />                       
  </>
 );
}

export default CssValue