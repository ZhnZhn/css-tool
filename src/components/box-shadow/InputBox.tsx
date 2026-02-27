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
import RowInputSwitch from '../zhn-r/RowInputSwitch';

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
}: InputBoxProps) => (
  <div style={S_DIV}>
    <RowInputColorHsl      
       styleInput={S_BOX_INPUT}
       caption="View Background"
       initValue={configStyle.bgColor}
       onEnter={colorHex => onEnter('bgColor', colorHex)}
    />
    <RowInputColorHsl      
       styleInput={S_BOX_INPUT}
       caption="Background"
       initValue={configStyle.boxColor}
       onEnter={colorHex => onEnter('boxColor', colorHex)}
    />
    <RowInputText         
       styleInput={S_BOX_INPUT}
       caption="Border Radius"
       initValue={configStyle.boxBorderRadius}
       onEnter={value => onEnter('boxBorderRadius', value)}
    />
    <RowInputSwitch       
       initialValue={configStyle.isBoxResize}      
       caption="Resize"
       onToggle={is => onEnter('isBoxResize', is)}      
    />
  </div>
);


const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = (
  prevProps,
  nextProps
) => prevProps.configStyle === nextProps.configStyle

export default memo(InputBox, _isNotShouldUpdate)
