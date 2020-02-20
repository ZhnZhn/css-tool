import React, { useRef, useCallback, useEffect } from 'react'

import A from '../Comp'

const CL = "page-sb__inputs";

const S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  }
};

const inputRows = [
  {
    style : S.ROW_INPUT, caption: "Horizontal Length",
    name: 'horizontal-lenght',
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Vertical Length",
    name: 'vertical-length',
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Blur Radius",
    name: 'blur-radius',
    min: 0, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT, caption: "Spread Radius",
    name: 'spread-radius',
    min: -10, max: 20, step:1, unit: 'px'
  },{
    style : S.ROW_INPUT,
    styleInput: { width: 55 },
    caption: "Opacity",
    name: 'opacity',
    min: 0, max: 1, step: 0.01, unit: ''
  }
];


const InputBoxShadow = ({
  initValue, configStyle,
  isShadow, isBox,
  onChange = () => {},
  onEnter = () => {},
}) => {
   const _refInput = useRef({})
   , _handleChangeInput = useCallback((propName, value) => {
       _refInput.current[propName] = value
       onChange(_refInput.current)
     }, [])
  , _handleEnter = useCallback((propName, value) => {
       onEnter(propName, value)
    }, [])
  , _handleEnterColor = useCallback((value, color) => {
       _refInput.current.color = color.toHexString()
       onChange(_refInput.current)
    }, []);

   useEffect(() => {
     _refInput.current = initValue
   }, [initValue.id])

   const {
       vLength, gLength,
       blurR, spreadR,
       opacity, color,
       id
     } = initValue
   , {
       bgColor,
       boxColor, boxBorderRadius
     } = configStyle;

   if (!isShadow && !isBox) {
     return null;
   }

   return (
     <div className={CL}>
       { isShadow && <>
         <A.RowInputType1
            {...inputRows[0]}
             inputId={id}
             initValue={vLength}
             onChange={_handleChangeInput.bind(null, 'vLength')}
         />
         <A.RowInputType1
            {...inputRows[1]}
            inputId={id}
            initValue={gLength}
            onChange={_handleChangeInput.bind(null, 'gLength')}
         />
         <A.RowInputType1
            {...inputRows[2]}
            inputId={id}
            initValue={blurR}
            onChange={_handleChangeInput.bind(null, 'blurR')}
         />
         <A.RowInputType1
            {...inputRows[3]}
            inputId={id}
            initValue={spreadR}
            onChange={_handleChangeInput.bind(null, 'spreadR')}
         />
         <A.RowInputType3
            key={`${id}-sc`}
            style={S.ROW_INPUT}
            caption="Shadow Color"
            initValue={color}
            onEnter={_handleEnterColor}
         />
         <A.RowInputType1
            {...inputRows[4]}
            inputId={id}
            initValue={opacity}
            onChange={_handleChangeInput.bind(null, 'opacity')}
         />
       </>}
       { isBox && <>
           <A.RowInputType3
              style={S.ROW_INPUT}
              styleInput={S.BOX_INPUT}
              caption="Background"
              initValue={bgColor}
              onEnter={_handleEnter.bind(null, 'bgColor')}
           />
           <A.RowInputType3
              style={S.ROW_INPUT}
              styleInput={S.BOX_INPUT}
              caption="Box Background"
              initValue={boxColor}
              onEnter={_handleEnter.bind(null, 'boxColor')}
           />
           <A.RowInputType2
              style={S.ROW_INPUT}
              styleInput={S.BOX_INPUT}
              caption="Box Border Radius"
              initValue={boxBorderRadius}
              onEnter={_handleEnter.bind(null, 'boxBorderRadius')}
           />
        </>}
     </div>
   );
}

const _isNotShouldUpdate = ({
 initValue, configStyle,
 isShadow, isBox
}, nextProps
) => initValue.id === nextProps.initValue.id
  && configStyle === nextProps.configStyle
  && isShadow === nextProps.isShadow
  && isBox === nextProps.isBox
   ? true
   : false;


export default React.memo(InputBoxShadow, _isNotShouldUpdate)
