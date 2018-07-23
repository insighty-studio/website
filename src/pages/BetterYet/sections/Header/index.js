import React, {PureComponent} from 'react';
import {BetterYetTitle} from './icons';

import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <img className="mobile" src={require('./images/by-mobile.png')} />
        <BetterYetTitle />
      </div>
    )
  }
}

export default Header;
