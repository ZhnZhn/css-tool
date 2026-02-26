import type { InputSwitchProps } from "../zhn/InputSwitch";
import InputSwitch from "../zhn/InputSwitch";

import {
    CL_ROW,
    S_INPUT_SWITCH
} from './style';

const RowInputSwitch = (props: InputSwitchProps) => (
    <InputSwitch 
       className={CL_ROW}
       style={S_INPUT_SWITCH}
       {...props}
    />
);

export default RowInputSwitch