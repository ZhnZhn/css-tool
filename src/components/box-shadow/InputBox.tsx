import { 
  CSSProperties, 
  IsNotShouldUpdate 
} from '../types';
import { 
  ConfigStyleType,
  UpdateConfigStyleFn 
} from './types';

import { 
  calcDimensionByClassName,
  getRefValue
} from '../uiApi';
import memo  from '../memo';

import useRefInit from '../hooks/useRefInit';

import RowInputText from '../zhn-r/RowInputText';
import RowInputColorHsl from '../zhn-r/RowInputColorHsl';
import RowInputNumber, { RowInputNumberProps } from '../zhn-r/RowInputNumber';
import RowInputSwitch from '../zhn-r/RowInputSwitch';

import {
  CL_PREVIEW,
  CL_PREVIEW_INNER
} from './cssFn'

const S_DIV: CSSProperties = {
  marginBottom: 32
}, S_BOX_INPUT: CSSProperties = {
  color: "brown"
}, S_INPUT_DIMENSION: CSSProperties = {
  width: 62
};

interface InputBoxProps {
  configStyle: ConfigStyleType;
  onEnter: UpdateConfigStyleFn;
}

const RowInputDimension = (
  props: Omit<RowInputNumberProps, "min" | "inputId">
) => (
  <RowInputNumber    
    inputId={"sd" + props.caption}
    styleInput={S_INPUT_DIMENSION}     
    min={16} 
    shiftTimes={5}     
    {...props}      
  />
);

const InputBox = ({
  configStyle,
  onEnter
}: InputBoxProps) => {
  const _refMaxDimension = useRefInit(
    () => calcDimensionByClassName(CL_PREVIEW)
  )  
  , _maxDimension = getRefValue(_refMaxDimension) || [100, 100];
  return (
    <div style={S_DIV}>
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="View Background"
         initValue={configStyle.bgColor}
         onEnter={colorHex => onEnter("bgColor", colorHex)}
      />
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="Background"
         initValue={configStyle.boxColor}
         onEnter={colorHex => onEnter("boxColor", colorHex)}
      />
      <RowInputText         
         styleInput={S_BOX_INPUT}
         caption="Border Radius"
         initValue={configStyle.boxBorderRadius}
         onEnter={value => onEnter("boxBorderRadius", value)}
      />
      {!configStyle.isBoxResize && <>
      <RowInputDimension                
         caption="Width"         
         max={_maxDimension[0]}       
         initValue={configStyle.width || (calcDimensionByClassName(CL_PREVIEW_INNER) || [])[0]}         
         onChange={value => onEnter("width", value)}          
      />
      <RowInputDimension              
         caption="Height"        
         max={_maxDimension[1]}       
         initValue={configStyle.height || (calcDimensionByClassName(CL_PREVIEW_INNER) || [])[1]}        
         onChange={value => onEnter("height", value)}          
      /></>}
      <RowInputSwitch       
         initialValue={configStyle.isBoxResize}      
         caption="Resize"
         onToggle={is => onEnter("isBoxResize", is)}      
      />
    </div>
  );
}


const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = (
  prevProps,
  nextProps
) => prevProps.configStyle === nextProps.configStyle

export default memo(InputBox, _isNotShouldUpdate)
