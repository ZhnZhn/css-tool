import type { CSSProperties } from '../types'

type StyleType = {
  CL_ROW: string;
  CL_CAPTION: string;
  CL_CHB_BT: string;
  RIGHT: CSSProperties;
  COLOR: CSSProperties;
  TEXT: CSSProperties
}


const S: StyleType = {
  CL_ROW: 'row',
  CL_CAPTION: 'row__caption',
  CL_CHB_BT: 'bt-chb row__caption',
  RIGHT: {
    float: 'right'
  },
  COLOR: {
    float: 'right',
    marginRight: 16
  },
  TEXT: {
    float: 'right',
    width: 80
  }
};

export default S
