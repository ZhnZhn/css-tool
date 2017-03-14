import React, { Component } from 'react'

import imArr from '../../utils/im-arr'
import imObj from '../../utils/im-obj'

import InputBoxShadow from './InputBoxShadow'
import ViewBoxShadow from './ViewBoxShadow'



const STYLE = {
  ROOT: {
    display: 'flex'
  },
  BOX_SHADOW : {
    display: 'inline-block',
    fontWeight: 'bold',
    width: '25%',
    minWidth: '245px',
    height: '90%'
  },
  RESULT : {
      display: 'inline-block',
      marginLeft: '48px',
      width: '65%',
      height: '90%',
      verticalAlign: 'top'
  }
}

const _initValue = {
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  opacity: 0.75
}

const _configStyle = {
  bgColor: 'gray',
  boxColor: '#e7a61a',
  boxBorderRadius: '0px'
}

class Page extends Component {

  constructor(props){
    super()
    this.boxShadow = _initValue
    this.index = 0
    this.boxShadows = [ _initValue ]
    this.state = {
      initValue: _initValue,
      index: 0,
      boxShadows: [ _initValue ],
      configStyle: _configStyle
    }
  }

  _handleChangeInput = (boxShadow) => {
    this.setState(prev => {
      const { boxShadows, index } = prev;
      return {
        boxShadows: imArr.update(boxShadows, index, boxShadow)
      }
    })
  }

  _handleOnAdd = (index) => {
    this.setState(prev => {
      const { boxShadows, index } = prev
          , value = boxShadows[index]
          , _index = index + 1;
      return {
        initValue: imObj.create(value),
        index: _index,
        boxShadows: imArr.insert(boxShadows, _index, value)
      }
    })
  }

  _handleOnEdit = (index) => {
    this.setState(prev => {
      return {
        initValue: imObj.create(prev.boxShadows[index]),
        index: index
      }
    })
  }

  _handleOnRemove = (index) => {
     if (index !== 0) {
       this.setState(prev => {
         const { boxShadows } = prev
             , _index = index - 1;
         return {
           index: _index,
           initValue: imObj.create(boxShadows[_index]),
           boxShadows: imArr.remove(boxShadows, index)
         }
       })
    }
  }

  _handleEnter = (propName, value) => {
    this.setState(prev => {
      const { configStyle } = prev;
      return {
        configStyle: imObj.update(configStyle, propName, value)
      }
    })
  }

  render(){
    const {
            initValue, boxShadows, index,
            configStyle
          } = this.state
    return (
      <div style={STYLE.ROOT} >
        <InputBoxShadow
           style={STYLE.BOX_SHADOW}
           initValue={initValue}
           configStyle={configStyle}
           onChange={this._handleChangeInput}
           onEnter={this._handleEnter}
        />
        <ViewBoxShadow
           style={STYLE.RESULT}
           currentIndex={index}
           boxShadows={boxShadows}
           configStyle={configStyle}
           onAdd={this._handleOnAdd}
           onEdit={this._handleOnEdit}
           onRemove={this._handleOnRemove}
        />
      </div>
    )
  }
}

export default Page
