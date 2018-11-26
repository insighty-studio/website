import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import {LPMATitle, Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';
import NavigationBar from 'components/NavigationBar';

import Laptop from './img/laptop.png';
import LaptopImage from './img/laptop.webp';
import {LPMAGraph} from './icons';

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
        <div className="lpma-graph">
          <Parallax
            offsetYMin={-40}
            offsetYMax={40}
          >
            <LPMAGraph />
          </Parallax>
        </div>
        <div className="lpma-title">
          <LPMATitle />
        </div>
        <div className="laptop-image">
          <Parallax
            offsetYMin={-10}
            offsetYMax={10}
          >
            <Image
              alt="LPMA"
              src={Laptop}
              webp={LaptopImage}
            />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Header;
