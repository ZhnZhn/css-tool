import { 
  CSSProperties
} from '../types';
import {
  ShadowType,
  UpdateShadowFn 
} from './types';

import {
  useMemo
} from '../uiApi';

import RowInputNumber from '../zhn-r/RowInputNumber';
import RowInputColorHsl from '../zhn-r/RowInputColorHsl';
import RowInputSwitch from '../zhn-r/RowInputSwitch';

const S_INPUT_OPACITY: CSSProperties = { 
  width: '55px' 
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
  const [
    onChangeGLength,
    onChangeVLength,
    onChangeBlurR,
    onChangeSpreadR,
    onEnterShadowColor,
    onChangeOpacity,
    onToggleInset
  ] = useMemo(() => [
    (value: number) => onChange('gLength', value),
    (value: number) => onChange('vLength', value),
    (value: number) => onChange('blurR', value),
    (value: number) => onChange('spreadR', value),
    (colorHex: string) => onChange('color', colorHex),
    (value: number) => onChange('opacity', value),
    (is: boolean) => onChange('isInset', is)
  ], [onChange])
  , {
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
         onChange={onChangeGLength}         
      />
      <RowInputNumber
         {...vlProps}
         inputId={id}
         initValue={vLength}
         onChange={onChangeVLength}         
      />
      <RowInputNumber         
         {...brProps}
         inputId={id}
         initValue={blurR}
         onChange={onChangeBlurR}         
      />
      <RowInputNumber        
         {...srProps}
         inputId={id}
         initValue={spreadR}
         onChange={onChangeSpreadR}         
      />
      <RowInputColorHsl   
         key={id}
         id="shadow-color"
         caption="Shadow Color"         
         initValue={color}
         onEnter={onEnterShadowColor}         
      />
      <RowInputNumber         
         {...opProps}
         styleInput={S_INPUT_OPACITY}
         inputId={id}
         initValue={opacity}
         onChange={onChangeOpacity}         
      />                  
      <RowInputSwitch 
         key={id}
         initialValue={initialValue.isInset}        
         caption="Inset"
         onToggle={onToggleInset}         
      />
    </>
  );
}

export default InputShadow
