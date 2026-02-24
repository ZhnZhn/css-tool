import type { 
  CSSProperties,
  IsNotShouldUpdate  
} from '../types';
import type { InputNumberType } from '../zhn/InputNumber';

import { round10 } from '../../utils/math';

import { 
  useCallback, 
  useRef 
} from '../uiApi';
import memo from '../memo';

import useToggle from '../hooks/useToggle';

import InputNumber from '../zhn/InputNumber';
import ShowHide from '../zhn/ShowHide';
import InputSlider from '../zhn/InputSlider';

import {
  CL_ROW,
  CL_CAPTION,
  S_RIGHT
} from './style';

export interface RowInputNumberProps {  
  caption: string;
  inputId: string;  
  initValue: number;  
  min: number; 
  max: number;  
  step?: number;
  id?: string;
  unit?: string;     
  styleInput?: CSSProperties;       
  onChange?: (value: number) => void;
}

const _crStepExp = (step: number): number => {
  const _arr = (''+step).split('.');
  return _arr[1] 
    ? -1 * _arr[1].length 
    : 0;
};  

const _crNumberValue = (
  stepExp: number, 
  value: InputNumberType
) => stepExp === 0
  ? parseFloat(''+value)
  : round10(parseFloat(''+value), stepExp)
  
const _FN_NOOP = () => {}

const RowInputNumber = ({
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
}: RowInputNumberProps) => {    
  const _refStepExp = useRef(_crStepExp(step))  
  , _hChangeNumber = useCallback((value: InputNumberType) => {    
    const _value = _crNumberValue(_refStepExp.current, value);
    if ( _value>=min && _value<=max ){          
      onChange(_value)
    }
  }, [min, max, onChange])
  , [
    isShowSlider, 
    toggleIsShowSlider
  ] = useToggle();
  
  return (
    <div className={CL_ROW}>        
        <label className={CL_CAPTION}>
          <span>{caption}</span>
          <span style={S_RIGHT}>{unit}</span>
          <InputNumber
             key={inputId}
             id={id}             
             style={{...S_RIGHT, ...styleInput}}                                      
             initialValue={initValue}
             step={step}
             min={min}
             max={max}
             onChange={_hChangeNumber}
             onEnter={toggleIsShowSlider}
          />
        </label>        
        <ShowHide is={isShowSlider}>
          <InputSlider
             key={`sl-${inputId}`}             
             initialValue={initValue}                   
             step={step}
             min={min}
             max={max}            
             onChange={_hChangeNumber}          
          />
        </ShowHide>
      </div>
  );
}

const _isNotShouldUpdate: IsNotShouldUpdate<RowInputNumberProps> = (
  prevProps,
  nextProps
) => prevProps.initValue === nextProps.initValue
  && prevProps.inputId === nextProps.inputId

export default memo(RowInputNumber, _isNotShouldUpdate)
