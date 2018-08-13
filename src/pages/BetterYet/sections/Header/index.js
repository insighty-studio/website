import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';

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
        <Parallax
          className="mobile-container"
          offsetYMax={40}
          offsetYMin={-40}
        >
          <img alt="" className="mobile" src={ByMobile} />
        </Parallax>
        <Parallax
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="betteryet-title">
            <BetterYetTitle />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Header;
