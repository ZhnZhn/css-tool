import type { FC, IsNotShouldUpdate } from '../types';
import type tinycolor from 'tinycolor2';
import { ShadowType } from './types';

import { 
  useRef, 
  useCallback, 
  useEffect 
} from '../uiApi';
import  memo  from '../memo';

import RowInputType1 from '../zhn-r/RowInputType1';
import RowInputType3 from '../zhn-r/RowInputType3';
import RowCheckBox from '../zhn-r/RowCheckBox';

interface InputShadowProps {
  id: string;
  isShadow: boolean;
  isInset: boolean;
  initValue: ShadowType;
  onChange? : (v: any) => void
}

type CrIdType = {
  ({caption}: {caption: string}): string
}

const _crId: CrIdType = ({ caption }) => caption
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
  id: _crId(item),
  ...item
}));

type FnChangeInputType = {
  (propName: keyof ShadowType, value: any): void
}
type UseChangeValue = {
  (fn: FnChangeInputType, propName: keyof ShadowType, value: any ): () => void
}

/*eslint-disable react-hooks/exhaustive-deps */
const _useChangeValue: UseChangeValue = (fn, propName, value) => useCallback(
  fn.bind(null, propName, value), []
);
/*eslint-enable react-hooks/exhaustive-deps */  

const _fnNoop = () => {}

const InputShadow: FC<InputShadowProps, false> = ({
  id,
  isShadow,
  isInset,
  initValue,
  onChange=_fnNoop
}) => {
  const _refInput = useRef<Partial<ShadowType>>({})
  /*eslint-disable react-hooks/exhaustive-deps */
  , _changeInput = useCallback((propName: keyof ShadowType, value: any) => {
      _refInput.current[propName] = value
      onChange(_refInput.current)
    }, [])
 , _enterColor = useCallback((value: string, color: tinycolor.Instance) => {
      _refInput.current.color = color.toHexString()
      onChange(_refInput.current)
   }, [])
  //onChange 
 /*eslint-enable react-hooks/exhaustive-deps */  
, _onChechInset = _useChangeValue(_changeInput, 'isInset', true)
, _onUnCheckInset = _useChangeValue(_changeInput, 'isInset', false)

 /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    _refInput.current = initValue
  }, [id, isInset])
 // initValue
 /*eslint-enable react-hooks/exhaustive-deps */    

  if (!isShadow) {return <div/>;}

  const {
    vLength, gLength,
    blurR, spreadR,
    opacity, color
  } = initValue;
  return (
    <>
      <RowInputType1
         {...INPUT_ROWS[0]}
          inputId={id}
          initValue={gLength}
          onChange={_changeInput.bind(null, 'gLength')}
      />
      <RowInputType1
         {...INPUT_ROWS[1]}
         inputId={id}
         initValue={vLength}
         onChange={_changeInput.bind(null, 'vLength')}
      />
      <RowInputType1
         {...INPUT_ROWS[2]}
         inputId={id}
         initValue={blurR}
         onChange={_changeInput.bind(null, 'blurR')}
      />
      <RowInputType1
         {...INPUT_ROWS[3]}
         inputId={id}
         initValue={spreadR}
         onChange={_changeInput.bind(null, 'spreadR')}
      />
      <RowInputType3
         //key={`${id}-sc`}
         id="shadow-color"
         caption="Shadow Color"         
         initValue={color}
         onEnter={_enterColor}
      />
      <RowInputType1
         {...INPUT_ROWS[4]}
         inputId={id}
         initValue={opacity}
         onChange={_changeInput.bind(null, 'opacity')}
      />
      <RowCheckBox
        id="inset"
        caption="Inset"        
        value={isInset}
        onCheck={_onChechInset}
        onUnCheck={_onUnCheckInset}
      />
    </>
  );
}

const _isNotShouldUpdate: IsNotShouldUpdate<InputShadowProps> = ({
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
