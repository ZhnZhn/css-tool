import { 
  CSSProperties, 
  IsNotShouldUpdate 
} from '../types';
import { 
  ConfigStyleType,
  UpdateConfigStyleFn 
} from './types';

import memo  from '../memo';

import RowInputText from '../zhn-r/RowInputText';
import RowInputColorHsl from '../zhn-r/RowInputColorHsl';

const S_DIV: CSSProperties = {
  marginBottom: 32
}, S_BOX_INPUT: CSSProperties = {
  color: 'brown'
};

const _fnNoop = () => {}

interface InputBoxProps {
  configStyle: ConfigStyleType;
  onEnter?: UpdateConfigStyleFn;
}

const InputBox = ({
  configStyle,
  onEnter=_fnNoop
}: InputBoxProps) => {
  const {
    bgColor,
    boxColor, 
    boxBorderRadius
  } = configStyle;
  return (
    <div style={S_DIV}>
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="Background"
         initValue={bgColor}
         onEnter={value => onEnter('bgColor', value)}
      />
      <RowInputColorHsl      
         styleInput={S_BOX_INPUT}
         caption="Box Background"
         initValue={boxColor}
         onEnter={value => onEnter('boxColor', value)}
      />
      <RowInputText         
         styleInput={S_BOX_INPUT}
         caption="Box Border Radius"
         initValue={boxBorderRadius}
         onEnter={value => onEnter('boxBorderRadius', value)}
      />
   </div>);
};

const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = (
  prevProps,
  nextProps
) => prevProps.configStyle === nextProps.configStyle

export default memo(InputBox, _isNotShouldUpdate)
