import React, { useRef, useCallback, useEffect } from 'react'

import A from '../Comp'

const S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  }
};

const inputRows = [
  {
    style : S.ROW_INPUT, caption: "Horizontal Length",
    name: 'horizontal-lenght',
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Vertical Length",
    name: 'vertical-length',
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Blur Radius",
    name: 'blur-radius',
    min: 0, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Spread Radius",
    name: 'spread-radius',
    min: -10, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT,
    styleInput: { width: 55 },
    caption: "Opacity",
    name: 'opacity',
    min: 0, max: 1, step: 0.01, unit: ''
  }
];

const _useChangeValue = (fn, propName, value) => useCallback(
  fn.bind(null, propName, value), []
);

const InputShadow = ({
  id,
  isShadow,
  isInset,
  initValue,
  onChange=()=>{}
}) => {
  const _refInput = useRef({})
  , _changeInput = useCallback((propName, value) => {
      _refInput.current[propName] = value
      onChange(_refInput.current)
    }, [])
 , _enterColor = useCallback((value, color) => {
      _refInput.current.color = color.toHexString()
      onChange(_refInput.current)
   }, [])
, _onChechInset = _useChangeValue(_changeInput, 'isInset', true)
, _onUnCheckInset = _useChangeValue(_changeInput, 'isInset', false)


   useEffect(() => {
     _refInput.current = initValue
   }, [id, isInset])

  if (!isShadow) {return null;}

  const {
    vLength, gLength,
    blurR, spreadR,
    opacity, color
  } = initValue;
  return (
    <>
      <A.RowInputType1
         {...inputRows[0]}
          inputId={id}
          initValue={vLength}
          onChange={_changeInput.bind(null, 'vLength')}
      />
      <A.RowInputType1
         {...inputRows[1]}
         inputId={id}
         initValue={gLength}
         onChange={_changeInput.bind(null, 'gLength')}
      />
      <A.RowInputType1
         {...inputRows[2]}
         inputId={id}
         initValue={blurR}
         onChange={_changeInput.bind(null, 'blurR')}
      />
      <A.RowInputType1
         {...inputRows[3]}
         inputId={id}
         initValue={spreadR}
         onChange={_changeInput.bind(null, 'spreadR')}
      />
      <A.RowInputType3
         key={`${id}-sc`}
         style={S.ROW_INPUT}
         caption="Shadow Color"
         initValue={color}
         onEnter={_enterColor}
      />
      <A.RowInputType1
         {...inputRows[4]}
         inputId={id}
         initValue={opacity}
         onChange={_changeInput.bind(null, 'opacity')}
      />
      <A.RowCheckBox
        caption="Inset"
        value={isInset}
        onCheck={_onChechInset}
        onUnCheck={_onUnCheckInset}
      />
    </>
  );
}

const _isNotShouldUpdate = ({
 isShadow, id, isInset
}, nextProps
) => {
  return id === nextProps.id
  && isInset === nextProps.isInset
  && isShadow === nextProps.isShadow
   ? true
   : false;
};

export default React.memo(InputShadow, _isNotShouldUpdate)
