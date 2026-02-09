const CL_BT_RAISED = "bt-raised";
const CL_WRAPPER_BT_RAISED = `wrapper__${CL_BT_RAISED}`;
const CL_BT_RAISED_DIV = `${CL_BT_RAISED}__div`;
const CL_BT_RAISED_CAPTION = `${CL_BT_RAISED}__caption`;

export interface RaisedButtonProps {
  caption: string,
  onClick?: () => void
}

const RaisedButton = (props: RaisedButtonProps) => (
  <div className={CL_WRAPPER_BT_RAISED}>
    <button
      className={CL_BT_RAISED}
      onClick={props.onClick}
    >
      <div className={CL_BT_RAISED_DIV}>
        <span className={CL_BT_RAISED_CAPTION}>
          {props.caption}
        </span>
      </div>
    </button>
  </div>
);

export default RaisedButton
