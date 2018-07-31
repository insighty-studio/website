import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';
import {Parallax} from 'react-scroll-parallax';

import ByMobile from './images/by-mobile.png';
import {BetterYetTitle} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar
          links={[
            {text: 'Home', to: 'home'},
            {text: 'Services', to: 'services'},
            {text: 'Process', to: 'process'},
            {text: 'Contact', to: 'white-paper'},
          ]}
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
          <BetterYetTitle />
        </Parallax>
      </div>
    );
  }
}

export default Header;
