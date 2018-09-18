import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Logo} from 'icons';
import Button from 'components/Button';

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
        <Logo />
        <ul className="header-nav">
          <li className="header-nav-item">Services</li>
          <li className="header-nav-item">Impact</li>
          <li className="header-nav-item">Case Studies</li>
          <li className="header-nav-item">Team</li>
        </ul>
        <Button className="header-button">FREE CONSULTATION</Button>
      </div>
    );
  }
}

export default Header;
