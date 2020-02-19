import React from 'react';

import crId from '../../utils/crId';

const {
  useState, useRef, useCallback,
  useEffect, useImperativeHandle
} = React;

const S = {
  INPUT_TEXT : {
    display: 'inline',
    color: 'green',
    height: 32,
    width: 45,
    paddingLeft: 5,
    marginLeft : 5,
    marginRight : 5,
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e1e1cb',
    border: 'medium none',
    outline: 'medium none',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

const DF_TEXT_PROPS = {
  autoCorrect: "off",
  autoCapitalize: "off",
  spellCheck: false,
  translate: false,
  maxLength: 25
};

const InputText = ({
  style,
  type='string',
  name,
  initValue='',
  inputId,
  step=1,
  min=-10,
  max=10,
  innerRef,
  onChange=()=>{},
  onEnter=()=>{}
}) => {
  const [value, setValue] = useState()
  , _refName = useRef(name || crId())
  , _handleInputChange = useCallback((event) => {
      const value = event.target.value;
      setValue(value)
      onChange(value)
    }, [])
  , _handleKeyDown = useCallback((event) => {
      if (event.keyCode === 13){
        onEnter(event.target.value)
      }
    }, []);

  useEffect(() => {
    setValue(initValue)
  }, [inputId])

  useImperativeHandle(innerRef, () => ({
    setValue
  }))

  const  _textProps = type === 'text'
    ? DF_TEXT_PROPS : void 0
  , _numberProps = type === 'number'
      ? {
        min, max, step
      } : void 0;

  return (
    <input
      type={type}
      name={_refName.current}
      {..._textProps}
      {..._numberProps}
      style={{...S.INPUT_TEXT, ...style}}
      value={value}
      onChange={_handleInputChange}
      onKeyDown={_handleKeyDown}
    />
  );
};

export default InputText
