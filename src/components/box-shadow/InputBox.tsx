import { CSSProperties, FC, IsNotShouldUpdate } from '../types';
import { ConfigStyleType } from './types';

import { useCallback } from '../uiApi';
import memo  from '../memo';

import A from '../Comp';

const S_DIV: CSSProperties = {
  marginBottom: 32
}, S_BOX_INPUT: CSSProperties = {
  color: 'brown'
};

const _fnNoop = () => {}

interface InputBoxProps {
  isBox: boolean;
  configStyle: ConfigStyleType
  onEnter?: (pn: keyof ConfigStyleType, v: string) => void
}

const InputBox: FC<InputBoxProps, false> = ({
  isBox,
  configStyle,
  onEnter=_fnNoop
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hEnter = useCallback((propName: keyof ConfigStyleType, value: string) => {
      onEnter(propName, value)
  }, []);
  //onEnter
  /*eslint-enable react-hooks/exhaustive-deps */

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
