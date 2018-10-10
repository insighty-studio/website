import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import classnames from 'classnames';

import {
  Logo,
  LinkedInIcon,
  FacebookIcon,
  ClutchIcon,
  AngelListIcon,
  BloggerIcon
} from 'icons';

import {Aligner} from 'components/Layout';
import {NavButton} from 'components/Button';
import {MenuIcon, CloseMenuIcon} from './icons';

import './index.styl';
import './mobile.styl';

const links = [
  {text: 'Services', to: '/services'},
  {text: 'Impact', to: '/impact'},
  {text: 'Case Studies', to: '/case-studies'},
  {text: 'Team', to: '/team'},
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
          <NavLink to="/">
            <Logo width="48px" height="49px" color="#FFFFFF" />
          </NavLink>
        </div>
        <ul className="mobile-header-nav">
          {
            links.map(({text, to}) => (
              <li key={uniqueid('link-')}>
                <NavLink
                  activeStyle={{fontWeight: 'bold'}}
                  className="header-nav-item"
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
        <Aligner>
          <NavLink to="/home" className="header-logo">
            <Logo />
          </NavLink>
          {this.renderLinks()}
          {isMenuStatus ? this.renderOpenedMenu() : this.renderClosedMenu()}
          <NavButton to="/consult" className="header-link">Free Consultation</NavButton>
        </Aligner>
      </div>
    );
  }
}

export default Header;
