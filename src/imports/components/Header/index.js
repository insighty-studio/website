import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        <Link className="header-link" to="consult"><Button className="header-button">FREE CONSULTATION</Button></Link>
      </div>
    );
  }
}

export default Header;
