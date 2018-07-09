import React from 'react';
import {Link} from 'react-scroll';

import './navigation-bar.styl';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="logo">
Insighty
        </div>
        <div className="links">
          <Link activeClass="active" to="services-section" smooth duration={500}>
            Services
          </Link>
          <Link activeClass="active" to="the-process" smooth duration={700}>
            Process
          </Link>
          <Link activeClass="active" to="work" smooth duration={900}>
            Work
          </Link>
          <Link activeClass="active" to="contact-us" smooth duration={1100}>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
