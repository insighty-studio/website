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
import Button from 'components/interactions/Button';
import {MenuIcon, CloseMenuIcon} from './icons';

import './index.styl';
import './mobile/index.styl';


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
    const links = [
      {text: 'HOME', to: '/home'},
      {text: 'SERVICES', to: '/services'},
      {text: 'IMPACT', to: '/impact'},
      {text: 'CASE STUDIES', to: '/case-studies'},
      {text: 'TEAM', to: '/team'},
    ];

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
          <Logo width="12.8vw" height="12.95vw" color="#FFFFFF" />
        </div>
        <ul className="mobile-header-nav">
          <li>
            <NavLink activeStyle={{fontWeight: 'bold'}} className="header-nav-item" to="/home">HOME</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{fontWeight: 'bold'}} className="header-nav-item" to="/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{fontWeight: 'bold'}} className="header-nav-item" to="/impact">IMPACT</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{fontWeight: 'bold'}} className="header-nav-item" to="/case-studies">
              CASE STUDIES
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{fontWeight: 'bold'}} className="header-nav-item" to="/team">TEAM</NavLink>
          </li>
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
        <NavLink className="header-link" to="/consult">
          <Button className="header-button">FREE CONSULTATION</Button>
        </NavLink>
      </div>
    );
  }
}

export default Header;
