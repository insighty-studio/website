import React from 'react';
import {Link} from 'react-scroll';
import classnames from 'classnames';
import {InsightyLogo} from 'icons';
import PropTypes from 'prop-types';

import './index.styl';

class NavigationBar extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  renderLinks() {
    const {links} = this.props;
    return links.map(({
      text, to, active
    }, i) => (
      <Link
        smooth
        key={to}
        className={classnames({active})}
        activeClass="active"
        to={to}
        duration={500 + (i * 200)}
      >
        {text}
      </Link>
    ));
  }

  render() {
    return (
      <div className="pages-navigation-bar">
        <div className="bar-content">
          <InsightyLogo />
          <div className="links">
            {this.renderLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
