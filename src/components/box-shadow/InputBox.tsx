import { CSSProperties, FC, IsNotShouldUpdate } from '../types';
import { ConfigStyleType } from './types';

import hooks from '../hooks';
import  memo  from '../memo';

import A from '../Comp';

const { useCallback } = hooks;

const S_DIV: CSSProperties = {
  marginBottom: 32
}, S_BOX_INPUT: CSSProperties = {
  color: 'brown'
};

const _fnNoop = () => {}

interface InputBoxProps {
  isBox: boolean;
  configStyle: ConfigStyleType
  onEnter?: (pn: string, v: any) => {}
}

const InputBox: FC<InputBoxProps, false> = ({
  isBox,
  configStyle,
  onEnter=_fnNoop
}) => {
  const _hEnter = useCallback((propName: string, value: any) => {
      onEnter(propName, value)
  }, []);

  if (!isBox) { return <div/>; }

  const {
    bgColor,
    boxColor, boxBorderRadius
  } = configStyle;
  return (
    <div style={S_DIV}>
      <A.RowInputType3         
         styleInput={S_BOX_INPUT}
         caption="Background"
         initValue={bgColor}
         onEnter={_hEnter.bind(null, 'bgColor')}
      />
      <A.RowInputType3         
         styleInput={S_BOX_INPUT}
         caption="Box Background"
         initValue={boxColor}
         onEnter={_hEnter.bind(null, 'boxColor')}
      />
      <A.RowInputType2         
         styleInput={S_BOX_INPUT}
         caption="Box Border Radius"
         initValue={boxBorderRadius}
         onEnter={_hEnter.bind(null, 'boxBorderRadius')}
      />
   </div>);
};

const _isNotShouldUpdate: IsNotShouldUpdate<InputBoxProps> = ({
 isBox, configStyle,
}, nextProps
) => isBox === nextProps.isBox
  && configStyle === nextProps.configStyle
   ? true
   : false;

export default memo(InputBox, _isNotShouldUpdate)
