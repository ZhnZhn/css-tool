import React, { Component  } from 'react'

import CssValue from './CssValue'
import Preview from './Preview'

class ViewBoxShadow extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,
    boxShadows: PropTypes.arrayOf(PropTypes.object),
    currentIndex: PropTypes.number,
    configStyle: PropTypes.object,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
  }
  */

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps &&
        this.props.boxShadows === nextProps.boxShadows &&
        this.props.currentIndex === nextProps.currentIndex &&
        this.props.configStyle === nextProps.configStyle ){
      return false;
    }
    return true;
  }

  render(){
    const {
            style, boxShadows, currentIndex,
            configStyle,
            onAdd, onEdit, onRemove
          } = this.props;
    return (
      <div style={style}>
        <CssValue
           currentIndex={currentIndex}
           boxShadows={boxShadows}
           onAdd={onAdd}
           onEdit={onEdit}
           onRemove={onRemove}
        />
        <Preview
           boxShadows={boxShadows}
           configStyle={configStyle}
         />
      </div>
    );
  }
}

export default ViewBoxShadow
