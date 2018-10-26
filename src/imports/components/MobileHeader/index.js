import React, {Component, Fragment} from 'react';
import uniqueid from 'lodash.uniqueid';
import classNames from 'classnames';

import {
  Logo,
  AngelListIcon,
  BloggerIcon,
  ClutchIcon,
  LinkedInIcon,
  FacebookIcon,
} from 'icons';
import {MenuIcon, CloseMenuIcon} from './icons';

import './index.styl';

const links = [
  {text: 'HOME', to: '/home'},
  {text: 'SERVICES', to: '/services'},
  {text: 'IMPACT', to: '/impact'},
  {text: 'OUR WORK', to: '/our-work'},
  {text: 'TEAM', to: '/team'},
];

class MobileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false,
    };
  }


  renderLinks() {
    return (
      <ul className="mobile-header-nav">
        {
          links.map(({text, to}) => (
            <a
              key={uniqueid('link-')}
              className="mobile-header-nav-item"
              href={to}
            >
              {text}
            </a>
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

  renderOpenedMenu = () => {
    const {isMenuOpened} = this.state;

    return (
      <div className={classNames('mobile-opened-menu', {active: isMenuOpened})}>
        <div className="opened-menu-top-bar">
          <button onClick={() => this.setState({isMenuOpened: false})} type="button" className="menu-icon-button">
            <CloseMenuIcon />
          </button>
          <a href="/home" className="menu-icon-button">
            <Logo color="#FFFFFF" />
          </a>
        </div>
        {this.renderLinks()}
        {this.renderSocials()}
      </div>
    );
  };

  renderClosedMenu = () => (
    <div className="mobile-closed-menu">
      <button onClick={() => this.setState({isMenuOpened: true})} type="button" className="menu-icon-button">
        <MenuIcon />
      </button>

      <a href="/consult" className="consult-button">FREE CONSULTATION</a>
    </div>
  );

  render() {
    return (
      <Fragment>
        <div style={{zIndex: '101'}}>
          {this.renderOpenedMenu()}
        </div>
        <div className="mobile-header">
          {this.renderClosedMenu()}
        </div>
      </Fragment>
    );
  }
}

export default MobileHeader;
