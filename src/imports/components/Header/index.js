import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Logo} from 'icons';
import Button from 'components/interactions/Button';

import './index.styl';

class Header extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className} = this.props;

    return (
      <div className={classnames('header', className)}>
        <a href="/home" className="header-logo">
          <Logo />
        </a>
        <ul className="header-nav">
          <li className="header-nav-item">SERVICES</li>
          <li className="header-nav-item">IMPACT</li>
          <li className="header-nav-item">CASE STUDIES</li>
          <li className="header-nav-item">TEAM</li>
        </ul>
        <Button className="header-button">FREE CONSULTATION</Button>
      </div>
    );
  }
}

export default Header;
