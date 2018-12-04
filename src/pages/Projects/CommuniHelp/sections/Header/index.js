import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';

import communiHelpMobile from './images/communihelp-mobile.png';

import './index.styl';
import './mobile/index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar
          white
          links={[
            {text: 'Home', href: '/home', active: true},
            {text: 'Services', href: '/services'},
            {text: 'Impact', href: '/impact'},
            {text: 'Our Work', href: '/our-work'},
            {text: 'Team', href: '/team'}
          ]}
          logoIcon={<Logo color="white" />}
        />
        <Parallax
          className="mobile-container"
          offsetYMax={40}
          offsetYMin={-40}
        >
          <img
            className="mobile"
            src={communiHelpMobile}
            alt="CommuniHelp mobile screenshot"
          />
        </Parallax>
        <Parallax
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="communihelp-title">
            CommuniHelp
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Header;
