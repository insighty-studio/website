import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import uniqueid from 'lodash.uniqueid';

import {MenuIcon, CloseMenuIcon} from './icons';

import './index.styl';

const links = [
  {text: 'SERVICES', to: '/services'},
  {text: 'IMPACT', to: '/impact'},
  {text: 'CASE STUDIES', to: '/case-studies'},
  {text: 'TEAM', to: '/team'},
];

class MobileHeader extends Component {
  renderLinks() {
    return (
      <ul className="mobile-header-nav">
        {
          links.map(({text, to}) => (
            <NavLink
              key={uniqueid('link-')}
              className="mobile-header-nav-item"
              to={to}
            >
              {text}
            </NavLink>
          ))
        }
      </ul>
    );
  }

  renderOpenedMenu = () => (
    <div className="mobile-opened-menu">
      <CloseMenuIcon />
    </div>
  );

  renderClosedMenu = () => (
    <div className="mobile-closed-menu">
      <button type="button" className="menu-icon-button">
        <MenuIcon />
      </button>

      <NavLink to="/consult" className="consult-button">FREE CONSULTATION</NavLink>
    </div>
  );

  render() {
    return (
      <div className="mobile-header">
        {this.renderClosedMenu()}
      </div>
    );
  }
}

export default MobileHeader;
