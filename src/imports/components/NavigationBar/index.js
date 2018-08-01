import React from 'react';
import {Link} from 'react-scroll';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class NavigationBar extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    logoIcon: PropTypes.element.isRequired,
    white: PropTypes.bool
  };

  static defaultProps = {
    white: false
  };

  renderLinks() {
    const {links, white} = this.props;
    return links.map(({
      text, to, href, active
    }, i) => {
      if (href) {
        return (
          <a className={white && 'white'} rel="noopener noreferrer" href={href}>
            {text}
          </a>
        );
      }
      return (
        <Link
          smooth
          key={to}
          className={classnames({active}, white && 'white')}
          activeClass="active"
          to={to}
          duration={500 + (i * 200)}
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
