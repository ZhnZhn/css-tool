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
import InputSwitch from '../zhn/InputSwitch';

import { 
  CL_ROW,
  S_INPUT_SWITCH 
} from '../zhn-r/style';

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
       caption="Background"
       initValue={configStyle.bgColor}
       onEnter={value => onEnter('bgColor', value)}
    />
    <RowInputColorHsl      
       styleInput={S_BOX_INPUT}
       caption="Box Background"
       initValue={configStyle.boxColor}
       onEnter={value => onEnter('boxColor', value)}
    />
    <RowInputText         
       styleInput={S_BOX_INPUT}
       caption="Box Border Radius"
       initValue={configStyle.boxBorderRadius}
       onEnter={value => onEnter('boxBorderRadius', value)}
    />
    <InputSwitch       
      initialValue={configStyle.isBoxResize}
      className={CL_ROW}
      style={S_INPUT_SWITCH}
      caption="Resize"
      onCheck={() => onEnter('isBoxResize', true)}
      onUnCheck={() => onEnter('isBoxResize', false)}        
    />
  </div>
);


const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = (
  prevProps,
  nextProps
) => prevProps.configStyle === nextProps.configStyle

export default memo(InputBox, _isNotShouldUpdate)
