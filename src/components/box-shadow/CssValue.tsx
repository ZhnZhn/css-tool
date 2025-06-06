import type { ShadowType } from './types';

import { toRgba } from './helpers/fn';
import CssToken from './CssToken';

interface CssValueProps {
  item: ShadowType;
  sufix: string;
}

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
      title={gLength + 'px'}
      id="horizontal-length"             
    />            
    <CssToken 
      title={vLength + 'px'}
      id="vertical-length"             
    />            
    <CssToken 
      title={blurR + 'px'}
      id="blur-radius"
    />            
    <CssToken 
      title={spreadR + 'px'}
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