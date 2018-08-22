import React, {PureComponent} from 'react';
import {isMobile} from 'react-device-detect';
import {Link} from 'react-scroll';
import {Logo} from 'icons';

import './index.styl';
import './mobile/index.styl';
import PropTypes from 'prop-types';

class Footer extends PureComponent {
  static propTypes = {
    landingStyle: PropTypes.bool,
    links: PropTypes.arrayOf(PropTypes.object),
    socials: PropTypes.arrayOf(PropTypes.object),
    rights: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }

  static defaultProps = {
    landingStyle: false,
    links: null,
    socials: null,
  }

  renderLinks(links) {
    if (!links) return null;
    return (
      <div className="links">
        {links.map(({text, to}, i) => (
          <Link
            smooth
            key={i}
            to={to}
            duration={500 + (i * 200)}
          >
            {text}
          </Link>
        ))}
      </div>
    );
  }

  renderSocials(socials) {
    if (!socials) return null;
    return (
      <div className="socials">
        {socials.map(({icon, link}, i) => (
          <a
            key={i}
            href={link}
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    );
  }

  renderLandingStyle(links, socials, rights, email, address) {
    return (
      <div className="footer-landing">
        <div className="content">
          <div className="menu">
            <div className="logo">
              <Logo />
            </div>
            {this.renderLinks(links)}
            {this.renderSocials(socials)}
          </div>
          <div className="details">
            <div className="rights">
              {rights}
            </div>
            <div className="info">
              <span>
                {email}
              </span>
              <br />
              <span>
                {address}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDefaultStyle(rights, email, address) {
    return (
      <div className="footer-default">
        <div className="details">
          {address}
          <br />
          {email}
        </div>
        <div className="rights">
          {rights}
        </div>
      </div>
    );
  }

  render() {
    const {
      landingStyle, links, socials, rights, email, address
    } = this.props;
    const content = (landingStyle && !isMobile)
      ? this.renderLandingStyle(links, socials, rights, email, address)
      : this.renderDefaultStyle(rights, email, address);
    return (
      <div className="footer">
        {content}
      </div>
    );
  }
}

export default Footer;
