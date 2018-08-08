import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';
import WebParallax from 'components/WebParallax';

import ByMobile from './images/by-mobile.png';
import {BetterYetTitle} from './icons';

import './index.styl';
import './mobile/index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar
          white
          links={[
            {text: 'Home', href: '/'},
            {text: 'Contact', to: 'white-paper'},
          ]}
          logoIcon={<Logo />}
        />
        <WebParallax
          className="mobile-container"
          offsetYMax={40}
          offsetYMin={-40}
        >
          <img alt="" className="mobile" src={ByMobile} />
        </WebParallax>
        <WebParallax
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="betteryet-title">
            <BetterYetTitle />
          </div>
        </WebParallax>
      </div>
    );
  }
}

export default Header;
