import React, {PureComponent} from 'react';
import {Link} from 'react-scroll';
import {
  Logo,
  AngelListIcon,
  BloggerIcon,
  ClutchIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
} from 'icons';

import './index.styl';
import './mobile/index.styl';

class Footer extends PureComponent {
  renderLinks() {
    const links = [
      {text: 'Home', to: 'header'},
      {text: 'Services', to: 'services'},
      {text: 'Process', to: 'process'},
      {text: 'Clients', to: 'clients'},
      {text: 'Contacts', to: 'contact-us'},
    ];

    return (
      <div className="links">
        {links.map(({text, to}, i) => (
          <Link
            smooth
            key={i}
            to={to}
            duration={1500 - (i * 200)}
          >
            {text}
          </Link>
        ))}
      </div>
    );
  }

  renderSocials() {
    return (
      <div className="socials">
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <BloggerIcon />
        <ClutchIcon />
        <AngelListIcon />
      </div>
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="menu">
          <Logo style={{width: 48, height: 48}} />
          {this.renderLinks()}
          {this.renderSocials()}
        </div>
        <div className="details">
          <div className="rights">© 2018 Insighty All Rights Reserved</div>
          <div className="info">
            <a href="mailto:hello@insighty.studio">hello@insighty.studio</a>
            <br />
            <span>240 Richmond St W, Toronto, ON M5V 1V6</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
