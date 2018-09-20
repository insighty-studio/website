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
        <Button className="header-button">FREE CONSULTATION</Button>
      </div>
    );
  }
}

export default Header;
