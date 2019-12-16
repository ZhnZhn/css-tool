import React, { Component } from 'react';

const S = {
  INPUT_TEXT : {
    display : 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '32px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#E1E1CB',
    marginLeft : '5px',
    marginRight : '5px',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

const _isFn = fn => typeof fn === 'function';

class InputText extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,
    initValue: PropTypes.string,
    onChange: PropTypes.func
  }
  */
  static defaultProps = {
    initValue : ''
  }

  constructor(props){
    super(props)
    this.isOnChange = _isFn(props.onChange)
    this.isOnEnter = _isFn(props.onEnter)
    this.state = {
      value: props.initValue
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
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
    const { style } = this.props
        , { value } = this.state;
    return (
      <input
        name="text"
        autoComplete="new-text"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        type="text"
        style={{ ...S.INPUT_TEXT, ...style}}
        value={value}
        translate="false"
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
