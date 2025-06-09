import type { 
  CSSProperties, 
  Ref,
  DispatchStateUpdater,  
  TinycolorInstance,
  HSLA 
} from '../types';
import type { 
  InputType
} from '../zhn/useInputValue';

import tinycolor from '../../tinycolor/tinycolor';
import { 
  useRef,
  useState,
  useMemo,
  getRefValue 
} from '../uiApi';

import useRefInit from '../hooks/useRefInit';
import useToggle from '../hooks/useToggle';

import InputText from '../zhn/InputText';
import Color from '../zhn/Color';
import ShowHide from '../zhn/ShowHide';
import InputNumber from '../zhn/InputNumber';

import {
  CL_ROW,
  CL_CAPTION,
  S_TEXT,
  S_COLOR
} from './style';

const S_HSL: CSSProperties = { 
  paddingTop: 12,
  paddingBottom: 12,
  borderBottom: '1px solid rgba(0, 0, 0, 0.2)' 
}
, S_HSL_CAPTION: CSSProperties = { 
  color: 'rgba(0, 0, 0, 0.5)',
  paddingRight: 14
}
, S_INPUT_NUMBER: CSSProperties = { width: 50 };

export interface RowInputType3Props {  
  id?: string;
  styleInput?: CSSProperties
  caption: string;  
  inputId?: string;
  initValue: string;  
  onEnter: (value: string, color: TinycolorInstance) => void
}

const _FN_NOOP = () => {};

const _fChangeItem = (  
  propName: keyof HSLA,  
  refHsl: Ref<HSLA | undefined>,
  onEnter: (value: string, color: TinycolorInstance) => void, 
  setValue: DispatchStateUpdater<string>
  ) => (value: number | string) => {
  const _hsl = getRefValue(refHsl);
    if (_hsl) {  
    _hsl[propName] = value        
    const _color = tinycolor(_hsl);
    if (_color && _color.isValid()){
      const _value = _color.toHexString()      
      onEnter(_value, _color)
      setValue(_value)
    }  
  }
}

type InputTypeOrNull = InputType | null

const RowInputType3 = ({   
  id,
  styleInput,
  caption,  
  inputId,
  initValue,
  onEnter=_FN_NOOP
}: RowInputType3Props) => {
  const _refHex = useRef<InputTypeOrNull>(null) 
  , _refH = useRef<InputTypeOrNull>(null)
  , _refS = useRef<InputTypeOrNull>(null)
  , _refL = useRef<InputTypeOrNull>(null)
  , _refHsl = useRefInit<HSLA>(() => {    
    const _color = tinycolor(initValue);    
    return _color.toHsl();
  })
  , [
    isHsl, 
    toggleIsHsl
  ] = useToggle()
  , [
    value, 
    setValue
  ] = useState(initValue) 
  /*eslint-disable react-hooks/exhaustive-deps */ 
  , _hEnter = useMemo(() => (value: string) => {    
     const color = tinycolor(value);     
     if (color && color.isValid()){
       const hsl = color.toHsl();
       getRefValue(_refH)?.setValue(hsl.h)
       getRefValue(_refS)?.setValue(hsl.s)
       getRefValue(_refL)?.setValue(hsl.l)       
       _refHsl.current = hsl       
       onEnter(value, color)
       setValue(color.toHexString())
     }
  }, [onEnter])
  // _refHsl
  , [
     _hChangeH,
     _hChangeS,
     _hChangeL
  ] = useMemo(() => [
    _fChangeItem('h', _refHsl, onEnter, setValue),
    _fChangeItem('s', _refHsl, onEnter, setValue),
    _fChangeItem('l', _refHsl, onEnter, setValue)
  ], [onEnter])
  // _refHsl
  , _hEnterHslColor = useMemo(() => () => {
       _refHex.current?.setValue(value)
  }, [value])  
  , { h, s, l } = useMemo(() => _refHsl.current, []) || {}
  // _refHsl.current
  /*eslint-enable react-hooks/exhaustive-deps */ 

  return (
   <div className={CL_ROW}>
      {/*eslint-disable jsx-a11y/label-has-for*/}
      <label className={CL_CAPTION}>
        <span>{caption}</span>
        <InputText
           innerRef={_refHex}
           key={inputId}
           id={id}
           style={{...S_TEXT, ...styleInput}}                      
           initialValue={value}
           onEnter={_hEnter}
         />
         <Color
           style={S_COLOR}
           value={value}
           onClick={toggleIsHsl}
         />
      </label>
      {/*eslint-enable jsx-a11y/label-has-for*/}
      <ShowHide is={isHsl}>
        <div style={S_HSL}>
         <span style={S_HSL_CAPTION}>HSL</span>
         <InputNumber
           innerRef={_refH}
           style={S_INPUT_NUMBER} 
           initialValue={h}
           min={0}
           max={360}
           onChange={_hChangeH}
           onEnter={_hEnterHslColor}
         />
         <InputNumber 
           innerRef={_refS}          
           style={S_INPUT_NUMBER} 
           initialValue={s}
           min={0}
           max={100}
           onChange={_hChangeS}
           onEnter={_hEnterHslColor}
         />
         <InputNumber     
           innerRef={_refL}      
           style={S_INPUT_NUMBER} 
           initialValue={l}
           min={0}
           max={100}
           onChange={_hChangeL}
           onEnter={_hEnterHslColor}
         />         
        </div>
      </ShowHide>
    </div>
  );
}

export default RowInputType3
