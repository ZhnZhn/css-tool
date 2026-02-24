import type { 
  CSSProperties,
  TinycolorInstance 
} from '../types';
import { 
  ShadowType,
  UpdateShadowFn 
} from './types';

import RowInputNumber from '../zhn-r/RowInputNumber';
import RowInputColorHsl from '../zhn-r/RowInputColorHsl';
import InputSwitch from '../zhn/InputSwitch';

import { CL_ROW } from '../zhn-r/style';

const S_INPUT_SWITCH: CSSProperties = {
  flexDirection: 'row',
  width: 'fit-content'
};

interface InputShadowProps {
  id: string;
  initialValue: ShadowType;
  onChange? : UpdateShadowFn;
}

const _crId = (
  caption: string
) => caption
  .toLowerCase()
  .replace(' ', '-');

const INPUT_ROWS = [
  {
    caption: "Horizontal Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    caption: "Vertical Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    caption: "Blur Radius",
    min: 0, max: 20, step:1, unit: 'px'
  },{
    caption: "Spread Radius",
    min: -10, max: 20, step:1, unit: 'px'
  },{
    styleInput: { width: 55 },
    caption: "Opacity",
    min: 0, max: 1, step: 0.01, unit: ''
  }
].map(item => ({
  id: _crId(item.caption),
  ...item
}));

const _fnNoop = () => {};

const InputShadow = ({
  id,
  initialValue,
  onChange=_fnNoop
}: InputShadowProps) => {  
  const {
    vLength, 
    gLength,
    blurR, 
    spreadR,
    opacity, 
    color
  } = initialValue;
  return (
    <>
      <RowInputNumber
         {...INPUT_ROWS[0]}
          inputId={id}
          initValue={gLength}
          onChange={value => onChange('gLength', value)}          
      />
      <RowInputNumber
         {...INPUT_ROWS[1]}
         inputId={id}
         initValue={vLength}
         onChange={value => onChange('vLength', value)}         
      />
      <RowInputNumber
         {...INPUT_ROWS[2]}
         inputId={id}
         initValue={blurR}
         onChange={value => onChange('blurR', value)}         
      />
      <RowInputNumber
         {...INPUT_ROWS[3]}
         inputId={id}
         initValue={spreadR}
         onChange={value => onChange('spreadR', value)}         
      />
      <RowInputColorHsl   
         key={id}
         id="shadow-color"
         caption="Shadow Color"         
         initValue={color}
         onEnter={(_value: string, color: TinycolorInstance) => onChange('color', color.toHexString())}         
      />
      <RowInputNumber
         {...INPUT_ROWS[4]}
         inputId={id}
         initValue={opacity}
         onChange={value => onChange('opacity', value)}         
      />                  
      <InputSwitch 
        key={id}
        initialValue={initialValue.isInset}
        className={CL_ROW}
        style={S_INPUT_SWITCH}
        caption="Inset"
        onCheck={() => onChange('isInset', true)}
        onUnCheck={() => onChange('isInset', false)}        
      />
    </>
  );
}

export default InputShadow
