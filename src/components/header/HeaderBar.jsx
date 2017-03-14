import React, { Component } from 'react'

import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'

class HeaderBar extends Component {
  render(){
    return (
      <div className="header" >
        <IconAppLogo
           className="header__icon-app"
           title="CSS Tool v0.01.0"
        />
        <AppLabel
           className="header__label-app"
           caption="CSS Tool v0.01.0"
        />
        <GitHubLink
          className="header__github-link"
          title="GitHub Repository"
          href="https://github.com/zhnzhn/css-tool"
       />
      </div>
    );
  }
}

export default HeaderBar
