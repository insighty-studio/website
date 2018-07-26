import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';

import ByMobile from './images/by-mobile.png';
import {BetterYetTitle} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar />
        <img alt="" className="mobile" src={ByMobile} />
        <BetterYetTitle />
      </div>
    );
  }
}

export default Header;
