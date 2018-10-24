import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import uniqueid from 'lodash.uniqueid';

import {
  Logo,
  AngelListIcon,
  BloggerIcon,
  ClutchIcon,
  LinkedInIcon,
  FacebookIcon,
} from 'icons';

import './index.styl';

const links = [
  {text: 'HOME', to: '/home'},
  {text: 'SERVICES', to: '/services'},
  {text: 'IMPACT', to: '/impact'},
  {text: 'CASE STUDIES', to: '/case-studies'},
  {text: 'TEAM', to: '/team'},
];

class MobileFooter extends Component {
  renderLinks() {
    return (
      <ul className="mobile-footer-nav">
        {
          links.map(({text, to}) => (
            <NavLink
              key={uniqueid('link-')}
              className="mobile-footer-nav-item"
              to={to}
            >
              {text}
            </NavLink>
          ))
        }
      </ul>
    );
  }

  renderSocials() {
    return (
      <div className="socials">
        <FacebookIcon />
        <LinkedInIcon />
        <BloggerIcon />
        <ClutchIcon />
        <AngelListIcon />
      </div>
    );
  }

  render() {
    return (
      <div className="mobile-footer">
        <NavLink to="/home" className="logo-link">
          <Logo className="logo" color="white" />
        </NavLink>
        {this.renderLinks()}
        <NavLink to="/consult" className="consult-button">FREE CONSULTATION</NavLink>
        {this.renderSocials()}
        <div className="info">
          <a href="mailto:hello@insighty.studio">hello@insighty.studio</a>
          <p>240 Richmond St W, Toronto, ON M5V 1V6</p>
          <p>© 2018 Insighty All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default MobileFooter;
