import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';

import BooqedLaptopImage from './images/booqed-laptop.png';
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
          logoIcon={<Logo color="#3F9DD1" />}
        />
        <Parallax
          className="mobile-container"
          offsetYMax={40}
          offsetYMin={-40}
        >
          <img
            className="laptop"
            src={BooqedLaptopImage}
            alt="booqed laptop"
          />
        </Parallax>
      </div>
    );
  }
}

export default Header;
