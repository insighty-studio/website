import React from 'react';
import {Link} from 'react-scroll';

import './index.styl';

const links = [
  {text: 'Services', to: "services"},
  {text: 'Process', to: "the-process"},
  {text: 'Contact', to: "contact-us"},
];

class NavigationBar extends React.Component {
  renderLinks() {
    return links.map(({text, to}, i) => (
      <Link activeClass="active" className="hover-grow" to={to} smooth duration={500 + (i * 200)}>
        {text}
      </Link>
    ));
  }

  render() {
    return (
      <div className="navigation-bar">
        <div className="logo" />
        <div className="links">
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
