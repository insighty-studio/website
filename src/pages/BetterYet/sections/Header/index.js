import React, {PureComponent} from 'react';
import NavigationBar from 'components/NavigationBar';

import {BetterYetTitle} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar />
        <img className="mobile" src={require('./images/by-mobile.png')} />
        <BetterYetTitle />
      </div>
    )
  }
}

export default Header;
