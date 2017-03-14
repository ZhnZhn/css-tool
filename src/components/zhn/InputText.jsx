import React, { Component, PropTypes } from 'react';

const S = {
  INPUT_TEXT : {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    //height: '26px',
    height: '32px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#E1E1CB',
    marginLeft : '5px',
    marginRight : '5px',
    display : 'inline'
  }
}


class InputText extends Component {
  static propTypes = {
    style: PropTypes.object,
    initValue: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    initValue : ''
  }

  constructor(props){
    super()
    this.isOnChange = (typeof props.onChange === 'function')
           ? true : false
    this.isOnEnter = (typeof props.onEnter === 'function')
           ? true : false
    this.state = {
      value : props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({ value : nextProps.initValue });
    }
  }

  _handleInputChange = (event) => {
    const value = event.target.value
    this.setState({ value })
    if (this.isOnChange){
      this.props.onChange(value)
    }
  }

  _handleKeyDown = (event) => {
    if (this.isOnEnter){
      if (event.keyCode === 13){
        this.props.onEnter(event.target.value)
      }
    }
  }

  render(){
    const {style} = this.props
        , {value} = this.state;
    return (
      <input
        name="text"
        autoComplete="new-text"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        type="text"
        style={Object.assign({}, S.INPUT_TEXT, style)}
        value={value}
        translate={false}
        onChange={this._handleInputChange}
        onKeyDown={this._handleKeyDown}
      />
    )
  }

  getValue(){
    return this.state.value;
  }
  setValue(value){
    this.setState({ value })
  }
}

export default InputText
