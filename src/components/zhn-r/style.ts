import type { CSSProperties } from '../types'

export const CL_ROW = 'row'
export const CL_CAPTION = `${CL_ROW}__caption`

const crFloatRightCss = (style?: CSSProperties): CSSProperties => ({
  ...style,
  float: 'right'
});
export const S_RIGHT = crFloatRightCss()
export const S_COLOR = crFloatRightCss({
  marginRight: 16
})
export const S_TEXT= crFloatRightCss({
  width: 80
})

export const S_INPUT_SWITCH: CSSProperties = {
  flexDirection: 'row',
  width: 'fit-content'
}