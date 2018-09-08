import React, {PureComponent} from 'react';
import {LPMATitle, Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';
import NavigationBar from 'components/NavigationBar';

import Laptop from './img/laptop.png';
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
            {text: 'Home', href: '/'},
            {text: 'Contact', to: 'contact-us-form'},
          ]}
          logoIcon={<Logo />}
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
            <img alt="LPMA" src={Laptop} />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Header;
