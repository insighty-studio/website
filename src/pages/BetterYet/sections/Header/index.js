import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';

import ByMobile from './images/by-mobile.png';
import {BetterYetTitle} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar
          white
          links={[
            {text: 'Home', href: 'https://insighty.studio/'},
            {text: 'Contact', to: 'white-paper'},
          ]}
          logoIcon={<Logo />}
        />
        <img alt="" className="mobile" src={ByMobile} />
        <BetterYetTitle />
      </div>
    );
  }
}

export default Header;
