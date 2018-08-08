import React from 'react';
import {Link} from 'react-scroll';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';
import './mobile/index.styl';

class NavigationBar extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object),
    logoIcon: PropTypes.element.isRequired,
    white: PropTypes.bool
  };

  static defaultProps = {
    links: null,
    white: false
  };

  renderLinks() {
    const {links, white} = this.props;
    if (!links) return null;
    return links.map(({
      text, to, href, active
    }, i) => {
      if (href) {
        return (
          <a
            key={i}
            href={href}
            className={white && 'white'}
            rel="noopener noreferrer"
          >
            {text}
          </a>
        );
      }
      return (
        <Link
          smooth
          key={i}
          to={to}
          activeClass="active"
          duration={500 + (i * 200)}
          className={classnames({active}, white && 'white')}
        >
          {text}
        </Link>
      );
    });
  }

  render() {
    const {logoIcon} = this.props;
    return (
      <div className="navigation-bar">
        <div className="bar-content">
          <a href="https://insighty.studio/" rel="noopener noreferrer">
            {logoIcon}
          </a>
          <div className="links">
            {this.renderLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
