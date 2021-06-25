import type { FC, CSSProperties, RefObject, ChangeEvent, KeyboardEvent } from '../types';

import hooks from '../hooks';

import crId from '../../utils/crId';

const {
  useState, useRef, useCallback,
  useEffect, useImperativeHandle
} = hooks;

const CL_INPUT_TEXT = 'input-text box-shadow';

type ValueType = string | number
type InnerRefType = {
  setValue: (initValue: any) => void
}

export interface InputTextProps {
  style?: CSSProperties;
  type?: 'text' | 'number';  
  id?: string;
  initValue?: ValueType;
  inputId?: string;
  step?: number;
  min?: number;
  max?: number;
  innerRef?: RefObject<InnerRefType>;
  onChange?: (value: any) => void;
  onEnter?: (value: any) => void;
}


type DfTextPropsType = {
  autoCorrect: 'on' | 'off';
  autoCapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  spellCheck: 'true' | 'false';
  translate: 'no' | 'yes' | undefined;
  maxLength: number;
}

const DF_TEXT_PROPS: DfTextPropsType = {
  autoCorrect: "off",
  autoCapitalize: "off",
  spellCheck: 'false',
  translate: "no",
  maxLength: 25
};

const _fnNoop = () => {}

const InputText: FC<InputTextProps, false> = ({
  id,
  style,
  type='text',  
  initValue='',
  inputId,
  step=1,
  min=-10,
  max=10,
  innerRef,
  onChange=_fnNoop,
  onEnter=_fnNoop
}) => {
  const [value, setValue] = useState<ValueType>(initValue)
  , _refId = useRef<string>(id || crId())
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      setValue(value)
      onChange(value)
    }, [])
    //onChange
  , _hKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13){                
        onEnter(event.currentTarget.value)
      }
    }, []);
    //onEnter
  

  useEffect(() => {
    setValue(initValue)
  }, [inputId])
   //initValue
  /*eslint-enable react-hooks/exhaustive-deps */ 

  useImperativeHandle(innerRef!, () => ({
    setValue
  }))

  const  _textProps = type === 'text'
    ? DF_TEXT_PROPS : void 0
  , _numberProps = type === 'number'
    ? { min, max, step } : void 0;

  return (
    <input
      type={type}
      id={_refId.current}
      {..._textProps}
      {..._numberProps}
      className={CL_INPUT_TEXT}
      style={style}
      value={value}
      //onChange={_hInputChange}
      onInput={_hInputChange}
      onKeyDown={_hKeyDown}
    />
  );
};

export default InputText
