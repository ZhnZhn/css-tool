import { 
  ShadowType,
  UpdateShadowFn 
} from './types';

import RowInputNumber from '../zhn-r/RowInputNumber';
import RowInputColorHsl from '../zhn-r/RowInputColorHsl';
import RowInputSwitch from '../zhn-r/RowInputSwitch';

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

const _crRowInputNumberProps = (
  caption: string,
  min: number,
  max = -min,
  step = 1,
  shiftTimes = 2,
  unit = 'px'
) => ({
  id: _crId(caption),
  caption,
  min,
  max,
  step,
  shiftTimes,
  unit
})

const hlProps = _crRowInputNumberProps("Horizontal Length", -30)
, vlProps = _crRowInputNumberProps("Vertical Length", -30)
, brProps = _crRowInputNumberProps("Blur Radius", 0, 20)
, srProps = _crRowInputNumberProps("Spread Radius", -10, 20)
, opProps = _crRowInputNumberProps("Opacity", 0, 1, 0.01, 10, '')

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
         {...hlProps}
         inputId={id}
         initValue={gLength}
         onChange={value => onChange('gLength', value)}          
      />
      <RowInputNumber
         {...vlProps}
         inputId={id}
         initValue={vLength}
         onChange={value => onChange('vLength', value)}         
      />
      <RowInputNumber         
         {...brProps}
         inputId={id}
         initValue={blurR}
         onChange={value => onChange('blurR', value)}         
      />
      <RowInputNumber        
         {...srProps}
         inputId={id}
         initValue={spreadR}
         onChange={value => onChange('spreadR', value)}         
      />
      <RowInputColorHsl   
         key={id}
         id="shadow-color"
         caption="Shadow Color"         
         initValue={color}
         onEnter={colorHex => onChange('color', colorHex)}         
      />
      <RowInputNumber         
         {...opProps}
         styleInput={{ width: 55 }}
         inputId={id}
         initValue={opacity}
         onChange={value => onChange('opacity', value)}         
      />                  
      <RowInputSwitch 
         key={id}
         initialValue={initialValue.isInset}        
         caption="Inset"
         onToggle={is => onChange('isInset', is)}        
      />
    </>
  );
}

export default InputShadow
