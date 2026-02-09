import type { IsNotShouldUpdate } from '../types';
import type { ShadowType, ConfigStyleType } from './types';

import memo from '../memo';

import CssValues from './CssValues';
import Preview from './Preview';

type FnNumberToVoid = (index: number) => void;
interface ViewBoxShadowProps {  
  boxShadows: ShadowType[];
  currentIndex: number;
  configStyle: ConfigStyleType;
  onAdd: FnNumberToVoid;
  onEdit: FnNumberToVoid;
  onRemove: FnNumberToVoid;
}

const ViewBoxShadow = (props: ViewBoxShadowProps) => (
  <>
    <Preview
       boxShadows={props.boxShadows}
       configStyle={props.configStyle}
     />
    <CssValues
       currentIndex={props.currentIndex}
       boxShadows={props.boxShadows}
       onAdd={props.onAdd}
       onEdit={props.onEdit}
       onRemove={props.onRemove}
    />
  </>
);

const _isNotShouldUpdate: IsNotShouldUpdate<ViewBoxShadowProps> = (
  prevProps,
  nextProps
) => prevProps.boxShadows === nextProps.boxShadows
  && prevProps.currentIndex === nextProps.currentIndex
  && prevProps.configStyle === nextProps.configStyle
  ? true
  : false;

export default memo(ViewBoxShadow, _isNotShouldUpdate) 

