import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
            <a className="header-nav-item" href="/home">HOME</a>
          </li>
          <li>
            <a className="header-nav-item" href="/services">SERVICES</a>
          </li>
          <li>
            <a className="header-nav-item" href="/impact">IMPACT</a>
          </li>
          <li>
            <a className="header-nav-item" href="/case-studies">CASE STUDIES</a>
          </li>
          <li>
            <a className="header-nav-item" href="/team">TEAM</a>
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
        <a href="/home" className="header-logo">
          <Logo />
        </a>
        <ul className="header-nav">
          <li>
            <a className="header-nav-item" href="/services">SERVICES</a>
          </li>
          <li>
            <a className="header-nav-item" href="/impact">IMPACT</a>
          </li>
          <li>
            <a className="header-nav-item" href="/case-studies">CASE STUDIES</a>
          </li>
          <li>
            <a className="header-nav-item" href="/team">TEAM</a>
          </li>
        </ul>

        {isMenuStatus ? this.renderOpenedMenu() : this.renderClosedMenu()}
        <Button className="header-button">FREE CONSULTATION</Button>
      </div>
    );
  }
}

export default Header;
