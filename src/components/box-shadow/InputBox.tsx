import { CSSProperties, FC, IsNotShouldUpdate } from '../types';
import { ConfigStyleType } from './types';

import { useCallback } from '../uiApi';
import memo  from '../memo';

import RowInputType2 from '../zhn-r/RowInputType2';
import RowInputType3 from '../zhn-r/RowInputType3';

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
      <RowInputType3         
         styleInput={S_BOX_INPUT}
         caption="Background"
         initValue={bgColor}
         onEnter={(value) => _hEnter('bgColor', value)}
      />
      <RowInputType3         
         styleInput={S_BOX_INPUT}
         caption="Box Background"
         initValue={boxColor}
         onEnter={(value) => _hEnter('boxColor', value)}
      />
      <RowInputType2         
         styleInput={S_BOX_INPUT}
         caption="Box Border Radius"
         initValue={boxBorderRadius}
         onEnter={(value) => _hEnter('boxBorderRadius', value)}
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
