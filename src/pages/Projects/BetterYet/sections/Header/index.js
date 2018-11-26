import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';

import ByMobile from './images/by-mobile.png';
import ByMobileWebp from './images/by-mobile.webp';
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
          <Image
            className="mobile"
            src={ByMobile}
            webp={ByMobileWebp}
          />
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
