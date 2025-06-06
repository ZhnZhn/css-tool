import type { CSSProperties } from '../types';
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

type InputType = {
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

const _crNumberValue = (
  stepExp: number, 
  value: number | string
) => stepExp === 0
  ? parseFloat(''+value)
  : round10(parseFloat(''+value), stepExp)
  
const _FN_NOOP = () => {}

const RowInputType1 = ({
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
}: RowInputType1Props) => {
  const _refInputNumber = useRef<InputType>(null)
  , _refSliderComp = useRef<InputType>()
  , _refStepExp = useRef(_crStepExp(step))
  , _hChangeSlider = useCallback((value: number) => {
    _refInputNumber.current?.setValue(value)
    onChange(''+value)
  }, [onChange])
  , _hChangeNumber = useCallback((value: number | string) => {    
    const _value = _crNumberValue(_refStepExp.current, value);
    if ( _value>=min && _value<=max ){      
      _refSliderComp.current?.setValue(_value)
      onChange(''+value)
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
             key={inputId}
             id={id}
             innerRef={_refInputNumber}
             style={{...S_RIGHT, ...styleInput}}                                      
             initialValue={initValue}
             step={step}
             min={min}
             max={max}
             onChange={_hChangeNumber}
             onEnter={toggleIsShowSlider}
          />
        </label>
        {/*eslint-enable jsx-a11y/label-has-for*/}
        <ShowHide is={isShowSlider}>
          <InputSlider
             key={`sl-${inputId}`}
             innerRef={_refSliderComp}     
             initialValue={initValue}                   
             step={step}
             min={min}
             max={max}            
             onChange={_hChangeSlider}          
          />
        </ShowHide>
      </div>
  );
}


export default RowInputType1
