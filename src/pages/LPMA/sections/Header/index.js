import React, {PureComponent} from 'react';
import {LPMATitle, Logo} from 'icons';
import WebParallax from 'components/WebParallax';
import NavigationBar from 'components/NavigationBar';

import Laptop from './img/laptop.png';
import {LPMAGraph} from './icons';

import './styles/web.styl';

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
        <div className="lpma-graph">
          <WebParallax
            offsetYMin={-40}
            offsetYMax={40}
          >
            <LPMAGraph />
          </WebParallax>
        </div>
        <div className="lpma-title">
          <LPMATitle />
        </div>
        <div className="laptop-image">
          <WebParallax
            offsetYMin={-10}
            offsetYMax={10}
          >
            <img alt="LPMA" src={Laptop} />
          </WebParallax>
        </div>
      </div>
    );
  }
}

export default Header;
