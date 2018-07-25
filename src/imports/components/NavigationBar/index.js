import React from 'react';
import {Link} from 'react-scroll';
import classnames from 'classnames';
import {InsightyLogo} from 'icons';

import './index.styl';

const links = [
  {text: 'Home', to: 'home'},
  {text: 'Services', to: 'services'},
  {text: 'Process', to: 'process'},
  {text: 'Contact', to: 'contact-us'},
];

class NavigationBar extends React.Component {
  renderLinks() {
    return links.map(({text, to, active}, i) => (
      <Link key={to} className={classnames({active})} activeClass="active" to={to} smooth duration={500 + (i * 200)}>
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
