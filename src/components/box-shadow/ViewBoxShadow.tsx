import type { FC, IsNotShouldUpdate } from '../types';
import type { ShadowType, ConfigStyleType } from './types';

import memo from '../memo';

import CssValues from './CssValues';
import Preview from './Preview';

interface ViewBoxShadowProps {  
  boxShadows: ShadowType[];
  currentIndex: number;
  configStyle: ConfigStyleType;
  onAdd: (index: number) => void;
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
}

const ViewBoxShadow: FC<ViewBoxShadowProps, false> = ({
  boxShadows, currentIndex,
  configStyle,  
  onAdd, onEdit, onRemove
}) => (
  <>
    <Preview
       boxShadows={boxShadows}
       configStyle={configStyle}
     />
    <CssValues
       currentIndex={currentIndex}
       boxShadows={boxShadows}
       onAdd={onAdd}
       onEdit={onEdit}
       onRemove={onRemove}
    />
  </>
);

const _isNotShouldUpdate: IsNotShouldUpdate<ViewBoxShadowProps> = (
  { boxShadows, currentIndex, configStyle },
  nextProps
) => boxShadows === nextProps.boxShadows
  && currentIndex === nextProps.currentIndex
  && configStyle === nextProps.configStyle
  ? true
  : false;

  
export default memo(ViewBoxShadow, _isNotShouldUpdate) 

