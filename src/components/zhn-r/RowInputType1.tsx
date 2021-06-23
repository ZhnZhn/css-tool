import type { CSSProperties, FC } from '../types';
import hooks from '../hooks';

import fnMath from '../../utils/math'

import A from '../zhn/A'
import S from './style'

const { useCallback, useRef } = hooks;

const { round10 } = fnMath;

type SetStringValueType = {
  setValue(v: string): void
}
type SetNumberValueType = {
  setValue(v: number): void
}

interface RowInputType1Props {
  unit?: string;     
  step?: number;
  min: number; 
  max: number;
  style?: CSSProperties;
  styleInput?: CSSProperties; 
  name: string; 
  caption: string;
  initValue: number;
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

const _fnNoop = () => {}

const RowInputType1: FC<RowInputType1Props, false> = ({
  unit='px',     
  step=1,
  min, 
  max,
  styleInput,
  name, caption,
  initValue, inputId,  
  onChange=_fnNoop,
  ...restProps
}) => {
  const _refTextComp = useRef<SetStringValueType>()
  , _refSliderComp = useRef<SetNumberValueType>()
  , _refStepExp = useRef(_crStepExp(step))
  , _hChangeSlider = useCallback((event: any, value: string) => {
    _refTextComp.current.setValue(value)
    onChange(value)
  }, [onChange])
  , _hChangeText = useCallback((value: string) => {    
    const _value = _crNumberValue(_refStepExp.current, value);
    if ( _value>=min && _value<=max ){      
      _refSliderComp.current.setValue(_value)
      onChange(value)
    }
  }, [])

  
  return (
    <div className={S.CL_ROW}>
        {/*eslint-disable jsx-a11y/label-has-for*/}
        <label className={S.CL_CAPTION}>
          <span>{caption}</span>
          <span style={S.RIGHT}>{unit}</span>
          <A.InputText
             innerRef={_refTextComp}
             style={{...S.RIGHT, ...styleInput}}
             type="number"
             name={name}
             inputId={inputId}
             initValue={initValue}
             step={step}
             min={min}
             max={max}
             onChange={_hChangeText}
          />
        </label>
        {/*eslint-enable jsx-a11y/label-has-for*/}
        <A.InputSlider
           ref={_refSliderComp}
           {...restProps}
           inputId={inputId}
           step={step}
           min={min}
           max={max}
           initValue={initValue}
           onChange={_hChangeSlider}
        />
      </div>
  );
}


export default RowInputType1
