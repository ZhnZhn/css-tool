import hooks from '../hooks'
import  memo  from '../memo'

import A from '../Comp'

const { useRef, useCallback, useEffect } = hooks

const _crName = ({ caption }) => caption
 .toLowerCase().replace(' ', '-');

const INPUT_ROWS = [
  {
    caption: "Horizontal Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    caption: "Vertical Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    caption: "Blur Radius",
    min: 0, max: 20, step:1, unit: 'px'
  },{
    caption: "Spread Radius",
    min: -10, max: 20, step:1, unit: 'px'
  },{
    styleInput: { width: 55 },
    caption: "Opacity",
    min: 0, max: 1, step: 0.01, unit: ''
  }
].map(item => ({
  name: _crName(item),
  ...item
}));

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

  if (!isShadow) {return <div/>;}

  const {
    vLength, gLength,
    blurR, spreadR,
    opacity, color
  } = initValue;
  return (
    <>
      <A.RowInputType1
         {...INPUT_ROWS[0]}
          inputId={id}
          initValue={vLength}
          onChange={_changeInput.bind(null, 'vLength')}
      />
      <A.RowInputType1
         {...INPUT_ROWS[1]}
         inputId={id}
         initValue={gLength}
         onChange={_changeInput.bind(null, 'gLength')}
      />
      <A.RowInputType1
         {...INPUT_ROWS[2]}
         inputId={id}
         initValue={blurR}
         onChange={_changeInput.bind(null, 'blurR')}
      />
      <A.RowInputType1
         {...INPUT_ROWS[3]}
         inputId={id}
         initValue={spreadR}
         onChange={_changeInput.bind(null, 'spreadR')}
      />
      <A.RowInputType3
         key={`${id}-sc`}
         caption="Shadow Color"
         initValue={color}
         onEnter={_enterColor}
      />
      <A.RowInputType1
         {...INPUT_ROWS[4]}
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

export default memo(InputShadow, _isNotShouldUpdate)
