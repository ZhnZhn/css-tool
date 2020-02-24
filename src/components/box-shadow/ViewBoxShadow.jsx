import { h, Fragment } from 'preact'
import memo from '../memo'

import CssValue from './CssValue'
import Preview from './Preview'

const ViewBoxShadow = ({
  boxShadows, currentIndex,
  configStyle,
  onAdd, onEdit, onRemove
}) => (
  <>
    <Preview
       boxShadows={boxShadows}
       configStyle={configStyle}
     />
    <CssValue
       currentIndex={currentIndex}
       boxShadows={boxShadows}
       onAdd={onAdd}
       onEdit={onEdit}
       onRemove={onRemove}
    />
  </>
);

/*
ViewBoxShadow.propTypes = {
  style: PropTypes.object,
  boxShadows: PropTypes.arrayOf(PropTypes.object),
  currentIndex: PropTypes.number,
  configStyle: PropTypes.object,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
}
*/

const _isNotShouldUpdate = (
  { boxShadows, currentIndex, configStyle },
  nextProps
) => boxShadows === nextProps.boxShadows
  && currentIndex === nextProps.currentIndex
  && configStyle === nextProps.configStyle
  ? true
  : false;

export default memo(ViewBoxShadow, _isNotShouldUpdate)
