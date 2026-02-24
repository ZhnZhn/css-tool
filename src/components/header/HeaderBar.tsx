import type { MouseEvent } from '../types';

import FlatButton from '../zhn-m/FlatButton';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import GitHubLink from './GitHubLink';

interface HeaderBarProps {
  onShadow: (evt: MouseEvent) => void;
  onBox: (evt: MouseEvent) => void;
}

const CAPTION = "CSS Tool v0.2.0";

const HeaderBar = (props: HeaderBarProps) => (
 <div className="header">
    <IconAppLogo
      className="header__icon-app"
      title={CAPTION}
    />    
    <AppLabel
      className="header__label-app"
      caption={CAPTION}
    />
    {/*eslint-disable jsx-a11y/no-access-key*/}
    <FlatButton
      caption="Box"
      title="Click to toggle css box inputs"
      accessKey="b"
      timeout={0}
      onClick={props.onBox}
    />
    <FlatButton
      caption="Shadow"
      title="Click to toggle css shadow-box inputs"
      accessKey="h"
      timeout={0}
      onClick={props.onShadow}
    />
    {/*eslint-enable jsx-a11y/no-access-key*/}
    <GitHubLink
      className="header__github-link"
      title="GitHub Repository"
      href="https://github.com/zhnzhn/css-tool/"
   />
 </div>
);

export default HeaderBar
