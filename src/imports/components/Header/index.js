import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import classnames from 'classnames';
import FreeConsultationButton from 'components/interactions/FreeConsultationButton';

import {
  Logo,
  LinkedInIcon,
  FacebookIcon,
  ClutchIcon,
  AngelListIcon,
  BloggerIcon
} from 'icons';
import {MenuIcon, CloseMenuIcon} from './icons';

import './index.styl';
import './mobile/index.styl';

const links = [
  {text: 'SERVICES', to: '/services'},
  {text: 'IMPACT', to: '/impact'},
  {text: 'OUR WORK  ', to: '/our-work'},
  {text: 'TEAM', to: '/team'},
];

class Header extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      isMenuStatus: '',
    };
  }

  renderLinks() {
    return (
      <ul className="header-nav">
        {
          links.map(({text, to}) => (
            <NavLink
              key={uniqueid('link-')}
              activeClassName="active-path"
              className="header-nav-item"
              to={to}
            >
              {text}
            </NavLink>
          ))
        }
      </ul>
    );
  }

  renderOpenedMenu() {
    return (
      <div className="opened-wrapper">
        <div className="close-menu-header">
          <div
            className="close-menu-icon"
            onClick={() => this.setState({isMenuStatus: ''})}
          >
            <CloseMenuIcon />
          </div>
          <NavLink to="/home" onClick={() => this.setState({isMenuStatus: ''})}>
            <Logo width="12.8vw" height="12.95vw" color="#FFFFFF" />
          </NavLink>
        </div>
        <ul className="mobile-header-nav">
          {
            links.map(({text, to}) => (
              <li key={uniqueid('link-')}>
                <NavLink
                  activeStyle={{fontWeight: 'bold'}}
                  className="header-nav-item"
                  onClick={() => this.setState({isMenuStatus: ''})}
                  to={to}
                >
                  {text}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className="social-links">
          <FacebookIcon />
          <LinkedInIcon />
          <BloggerIcon />
          <ClutchIcon />
          <AngelListIcon />
        </div>
      </div>
    );
  }

  renderClosedMenu() {
    return (
      <div
        className="menu-icon"
        onClick={() => this.setState({isMenuStatus: 'opened'})}
      >
        <MenuIcon />
      </div>
    );
  }

  render() {
    const {isMenuStatus} = this.state;
    const {className} = this.props;

    return (
      <div className={classnames('header', className, isMenuStatus)}>
        <NavLink to="/home" className="header-logo">
          <Logo />
        </NavLink>
        {this.renderLinks()}
        {isMenuStatus ? this.renderOpenedMenu() : this.renderClosedMenu()}
        <div className="header-link">
          <FreeConsultationButton />
        </div>
      </div>
    );
  }
}

export default Header;
