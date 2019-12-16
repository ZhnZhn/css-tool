import React, { Component } from 'react'

import A from '../Comp'

const S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  },
  INPUT_OPACITY : {
    width: '50px'
  }
};

const inputRows = [
  {
    style : S.ROW_INPUT, caption: "Horizontal Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Vertical Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Blur Radius",
    min: 0, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Spread Radius",
    min: -10, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Opacity",
    min: 0, max: 1, step: 0.01, unit: ''
  }
]


class InputBoxShadow extends Component {
  /*
   static propTypes = {
      initValue: PropTypes.shape({
        vLength: PropTypes.number,
        gLength: PropTypes.number,
        blurR: PropTypes.number,
        spreadR: PropTypes.number,
        color: PropTypes.string,
        opacity: PropTypes.number
      }),
      onChange: PropTypes.func,
      onEnter: PropTypes.func
   }
   */

   static defaultProps = {
     onChange: () => {},
     onEnter: () => {}
   }

  constructor(props){
    super(props)
    const { vLength, gLength, blurR, spreadR, color, opacity } = props.initValue
    this.vLength = vLength
    this.gLength = gLength
    this.blurR = blurR
    this.spreadR = spreadR
    this.color = color
    this.opacity = opacity
  }

  _getBoxShadow = () => {
    return {
      vLength: this.vLength,
      gLength: this.gLength,
      blurR: this.blurR,
      spreadR: this.spreadR,
      color: this.color,
      opacity: this.opacity
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (this.props !== nextProps &&
        this.props.initValue !== nextProps.initValue ) {
          const { vLength, gLength, blurR, spreadR, color, opacity } = nextProps.initValue
          this.vLength = vLength
          this.gLength = gLength
          this.blurR = blurR
          this.spreadR = spreadR
          this.color = color
          this.opacity = opacity
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps &&
        this.props.initValue === nextProps.initValue ){
      //console.log('skip Input render');
      return false;
    }
    return true;
  }

  _handleChangeInput = (propName, value) => {
     this[propName] = value
     this.props.onChange(this._getBoxShadow())
  }

  _handleEnter = (propName, value) => {
     this.props.onEnter(propName, value)
  }
  _handleEnterColor = (value, color) => {
     this.color = color.toHexString()
     this.props.onChange(this._getBoxShadow())
  }

  render(){
    const { style, initValue, configStyle } = this.props
        , {
            vLength, gLength,
            blurR, spreadR,
            opacity, color
          } = initValue
        , {
            bgColor,
            boxColor, boxBorderRadius
          } = configStyle
    return (
      <div style={style}>
        <A.RowInputType1
           {...inputRows[0]}
            initValue={vLength}
            onChange={this._handleChangeInput.bind(this, 'vLength')}
        />
        <A.RowInputType1
           {...inputRows[1]}
           initValue={gLength}
           onChange={this._handleChangeInput.bind(this, 'gLength')}
        />
        <A.RowInputType1
           {...inputRows[2]}
           initValue={blurR}
           onChange={this._handleChangeInput.bind(this, 'blurR')}
        />
        <A.RowInputType1
           {...inputRows[3]}
           initValue={spreadR}
           onChange={this._handleChangeInput.bind(this, 'spreadR')}
        />
        <A.RowInputType3
           style={S.ROW_INPUT}
           caption="Shadow Color"
           initValue={color}
           onEnter={this._handleEnterColor}
        />
        <A.RowInputType1
           {...inputRows[4]}
           initValue={opacity}
           styleInput={S.INPUT_OPACITY}
           onChange={this._handleChangeInput.bind(this, 'opacity')}
        />
        <A.RowInputType3
           style={S.ROW_INPUT}
           styleInput={S.BOX_INPUT}
           caption="Wrapper Background"
           initValue={bgColor}
           onEnter={this._handleEnter.bind(this, 'bgColor')}
        />
        <A.RowInputType3
           style={S.ROW_INPUT}
           styleInput={S.BOX_INPUT}
           caption="Box Background"
           initValue={boxColor}
           onEnter={this._handleEnter.bind(this, 'boxColor')}
        />
        <A.RowInputType2
           style={S.ROW_INPUT}
           styleInput={S.BOX_INPUT}
           caption="Box Border Radius"
           initValue={boxBorderRadius}
           onEnter={this._handleEnter.bind(this, 'boxBorderRadius')}
        />
      </div>
    )
  }
}

export default InputBoxShadow
