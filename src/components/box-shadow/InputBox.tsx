import { 
  CSSProperties, 
  IsNotShouldUpdate 
} from '../types';
import { 
  ConfigStyleType,
  UpdateConfigStyleFn 
} from './types';

import { 
  useMemo,
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
  marginBottom: '32px'
}, S_BOX_INPUT: CSSProperties = {
  color: "brown"
}, S_INPUT_DIMENSION: CSSProperties = {
  width: '62px'
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
  , _maxDimension = getRefValue(_refMaxDimension) || [100, 100]
  , [
    onEnterViewBackgroundColor,
    onEnterBackgroundColor,
    onEnterBorderRadius,
    onChangeWidth,
    onChangeHeight,
    onToggleResize
  ] =  useMemo(() => [
    (colorHex: string) => onEnter("bgColor", colorHex),
    (colorHex: string) => onEnter("boxColor", colorHex),
    (value: string) => onEnter("boxBorderRadius", value),
    (value: number) => onEnter("width", value),
    (value: number) => onEnter("height", value),
    (is: boolean) => onEnter("isBoxResize", is)
  ], [onEnter]);
  return (
    <div style={S_DIV}>
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="View Background"
         initValue={configStyle.bgColor}
         onEnter={onEnterViewBackgroundColor}         
      />
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="Background"
         initValue={configStyle.boxColor}
         onEnter={onEnterBackgroundColor}         
      />
      <RowInputText         
         styleInput={S_BOX_INPUT}
         caption="Border Radius"
         initValue={configStyle.boxBorderRadius}
         onEnter={onEnterBorderRadius}         
      />
      {!configStyle.isBoxResize && <>
      <RowInputDimension                
         caption="Width"         
         max={_maxDimension[0]}       
         initValue={configStyle.width || (calcDimensionByClassName(CL_PREVIEW_INNER) || [])[0]}         
         onChange={onChangeWidth}         
      />
      <RowInputDimension              
         caption="Height"        
         max={_maxDimension[1]}       
         initValue={configStyle.height || (calcDimensionByClassName(CL_PREVIEW_INNER) || [])[1]}        
         onChange={onChangeHeight}         
      /></>}
      <RowInputSwitch       
         initialValue={configStyle.isBoxResize}      
         caption="Resize"
         onToggle={onToggleResize}         
      />
    </div>
  );
}


const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = (
  prevProps,
  nextProps
) => prevProps.configStyle === nextProps.configStyle

export default memo(InputBox, _isNotShouldUpdate)
