import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
            <Link className="header-nav-item" to="home">HOME</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="services">SERVICES</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="impact">IMPACT</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="case-studies">CASE STUDIES</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="team">TEAM</Link>
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
        <Link to="home" className="header-logo">
          <Logo />
        </Link>
        <ul className="header-nav">
          <li>
            <Link className="header-nav-item" to="services">SERVICES</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="impact">IMPACT</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="case-studies">CASE STUDIES</Link>
          </li>
          <li>
            <Link className="header-nav-item" to="team">TEAM</Link>
          </li>
        </ul>
        {isMenuStatus ? this.renderOpenedMenu() : this.renderClosedMenu()}
        <Link className="header-link" to="consult"><Button className="header-button">FREE CONSULTATION</Button></Link>
      </div>
    );
  }
}

export default Header;
