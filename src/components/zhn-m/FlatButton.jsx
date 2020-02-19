import React, { useRef, useCallback } from 'react'

import has from '../has'

import CaptionInput from './CaptionInput'

const { HAS_TOUCH } = has;

const CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
const S = {
  PRIMARY: {
    color: '#607d8b'
  }
};
const POINTER_EVENTS = 'pointer-events';

const _setPointerEvents = (_ref, value='auto') => {
  if (_ref && _ref.current && _ref.current.style) {
    _ref.current.style[POINTER_EVENTS] = value
  }
};

const FlatButton = ({
  className, rootStyle, clDiv=CL.BT_DIV, isPrimary,
  title='', caption, accessKey,
  timeout=3000,
  onClick,
  children
}) => {
  const _refBt = useRef()
  , _hClick = useCallback((event) => {
      _setPointerEvents(_refBt, 'none')
      setTimeout(_setPointerEvents, timeout, _refBt)
      onClick(event)
    }, [timeout, onClick])
  , _style = isPrimary
       ? {...rootStyle, ...S.PRIMARY }
       : rootStyle
  , _className = className
       ? `${CL.BT} ${className}`
       : CL.BT
  , _accessKey = HAS_TOUCH
       ? void 0
       : accessKey
  , _title = _accessKey
       ? `${title} [${accessKey}]`
       : title;
  return (
    <button
      ref = {_refBt}
      type="button"
      className={_className}
      style={_style}
      accessKey={_accessKey}
      tabIndex={0}
      title={_title}
      onClick={_hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={CL.BT_SPAN}
          caption={caption}
          accessKey={_accessKey}
        />
        {children}
      </div>
    </button>
  );
}

export default FlatButton
