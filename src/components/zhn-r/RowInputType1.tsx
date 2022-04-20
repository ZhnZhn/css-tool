import type { CSSProperties, FC } from '../types';
import { 
  useCallback, 
  useRef 
} from '../uiApi';

import { round10 } from '../../utils/math';

import useToggle from '../hooks/useToggle';

import InputNumber from '../zhn/InputNumber';
import ShowHide from '../zhn/ShowHide';
import InputSlider from '../zhn/InputSlider';

import {
  CL_ROW,
  CL_CAPTION,
  S_RIGHT
} from './style';

type SetStringValueType = {
  setValue(v: string): void
}
type SetNumberValueType = {
  setValue(v: number): void
}

export interface RowInputType1Props {
  id?: string;
  unit?: string;     
  initValue: number;
  step?: number;
  min: number; 
  max: number;  
  styleInput?: CSSProperties;     
  caption: string;
  inputId: string;  
  onChange?: (v: string) => void
}

const _crStepExp = (step: number) => {
  const _arr = (''+step).split('.');
  return _arr[1] ? -1 * _arr[1].length : 0;
}  

const _crNumberValue = (stepExp: number, value: string) => stepExp !== 0
  ? round10(parseFloat(value), stepExp)
  : parseInt(value, 10);

const _FN_NOOP = () => {}

const RowInputType1: FC<RowInputType1Props, false> = ({
  id,
  unit='px',     
  step=1,
  min, 
  max,
  styleInput,
  caption,
  initValue, 
  inputId,  
  onChange=_FN_NOOP
}) => {
  const _refTextComp = useRef<SetStringValueType>()
  , _refSliderComp = useRef<SetNumberValueType>()
  , _refStepExp = useRef(_crStepExp(step))
  , _hChangeSlider = useCallback((value: string) => {
    _refTextComp.current?.setValue(value)
    onChange(value)
  }, [onChange])
  , _hChangeText = useCallback((value: string) => {    
    const _value = _crNumberValue(_refStepExp.current, value);
    if ( _value>=min && _value<=max ){      
      _refSliderComp.current?.setValue(_value)
      onChange(value)
    }
  }, [min, max, onChange])
  , [isShowSlider, toggleIsShowSlider] = useToggle()

  
  return (
    <div className={CL_ROW}>
        {/*eslint-disable jsx-a11y/label-has-for*/}
        <label className={CL_CAPTION}>
          <span>{caption}</span>
          <span style={S_RIGHT}>{unit}</span>
          <InputNumber
             id={id}
             innerRef={_refTextComp}
             style={{...S_RIGHT, ...styleInput}}                         
             inputId={inputId}
             initialValue={initValue}
             step={step}
             min={min}
             max={max}
             onChange={_hChangeText}
             onEnter={toggleIsShowSlider}
          />
        </label>
        {/*eslint-enable jsx-a11y/label-has-for*/}
        <ShowHide is={isShowSlider}>
          <InputSlider
             ref={_refSliderComp}           
             inputId={inputId}
             step={step}
             min={min}
             max={max}
             initValue={initValue}
             onChange={_hChangeSlider}          
          />
        </ShowHide>
      </div>
  );
}


export default RowInputType1
