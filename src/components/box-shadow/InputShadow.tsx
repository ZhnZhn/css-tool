import type { 
  CSSProperties,
  IsNotShouldUpdate,
  TinycolorInstance 
} from '../types';
import { ShadowType } from './types';

import { 
  useRef, 
  useCallback, 
  useEffect 
} from '../uiApi';
import  memo  from '../memo';

import RowInputType1 from '../zhn-r/RowInputType1';
import RowInputType3 from '../zhn-r/RowInputType3';
import InputSwitch from '../zhn/InpitSwitch';

import { CL_ROW } from '../zhn-r/style';

const S_INPUT_SWITCH: CSSProperties = {
  flexDirection: 'row',
  width: 'fit-content'
};

interface InputShadowProps {
  id: string;
  isShadow: boolean;
  isInset: boolean;
  initValue: ShadowType;
  onChange? : (v: Partial<ShadowType>) => void
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
  (propName: keyof ShadowType, value: unknown): void
}
type UseChangeValue = {
  (fn: FnChangeInputType, propName: keyof ShadowType, value: unknown): () => void
}

/*eslint-disable react-hooks/exhaustive-deps */
const useChangeValue: UseChangeValue = (
  fn, 
  propName, 
  value
  ) => useCallback(
  fn.bind(null, propName, value), []
);
/*eslint-enable react-hooks/exhaustive-deps */  

const _fnNoop = () => {}

const InputShadow = ({
  id,
  isShadow,
  isInset,
  initValue,
  onChange=_fnNoop
}: InputShadowProps) => {
  const _refInput = useRef<Partial<ShadowType>>({})
  /*eslint-disable react-hooks/exhaustive-deps */
  , _changeInput = useCallback((propName: keyof ShadowType, value: any) => {
      _refInput.current[propName] = value
      onChange(_refInput.current)
    }, []) 
   , _enterColor = useCallback((_value: string, color: TinycolorInstance) => {     
      _refInput.current.color = color.toHexString()
      onChange(_refInput.current)
   }, [])
  //onChange 
 /*eslint-enable react-hooks/exhaustive-deps */  
, _onChechInset = useChangeValue(_changeInput, 'isInset', true)
, _onUnCheckInset = useChangeValue(_changeInput, 'isInset', false)

 /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    _refInput.current = initValue
  }, [id, isInset])
 // initValue
 /*eslint-enable react-hooks/exhaustive-deps */    

  if (!isShadow) {return <div/>;}

  const {
    vLength, 
    gLength,
    blurR, 
    spreadR,
    opacity, 
    color
  } = initValue;
  return (
    <>
      <RowInputType1
         {...INPUT_ROWS[0]}
          inputId={id}
          initValue={gLength}
          onChange={(value) => _changeInput('gLength', value)}
      />
      <RowInputType1
         {...INPUT_ROWS[1]}
         inputId={id}
         initValue={vLength}
         onChange={(value) => _changeInput('vLength', value)}
      />
      <RowInputType1
         {...INPUT_ROWS[2]}
         inputId={id}
         initValue={blurR}
         onChange={(value) => _changeInput('blurR', value)}
      />
      <RowInputType1
         {...INPUT_ROWS[3]}
         inputId={id}
         initValue={spreadR}
         onChange={(value) => _changeInput('spreadR', value)}
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
         onChange={(value) => _changeInput('opacity', value)}
      />                  
      <InputSwitch 
        initialValue={isInset}
        className={CL_ROW}
        style={S_INPUT_SWITCH}
        caption="Inset"
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
