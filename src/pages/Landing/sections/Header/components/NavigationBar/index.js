import React from 'react';
import {Link} from 'react-scroll';
import classnames from 'classnames';

import './index.styl';

const links = [
  {text: 'Home', to: "home", active: true},
  {text: 'Services', to: "services"},
  {text: 'Process', to: "process"},
  {text: 'Clients', to: "clients"},
  {text: 'Contact', to: "contact-us"},
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
      <div className="navigation-bar">
        <div className="bar-content">
          <div className="logo" />
          <div className="links">
            {this.renderLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
