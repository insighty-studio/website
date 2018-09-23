import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import NavigationBar from 'components/NavigationBar';
import {Logo} from 'icons';
import {Parallax} from 'react-scroll-parallax';

import HubMobile from './images/hub-mobile.png';
import HubMobileWebp from './images/hub-mobile.webp';
import {HubTitle} from './icons';

import './index.styl';
import './mobile/index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <NavigationBar
          white
          links={[
            {text: 'Home', href: '/'},
            {text: 'Contact', to: 'contact-us-form'},
          ]}
          logoIcon={<Logo color="white" />}
        />
        <Parallax
          className="mobile-container"
          offsetYMax={40}
          offsetYMin={-40}
        >
          <Image
            className="mobile"
            src={HubMobile}
            webp={HubMobileWebp}
          />
        </Parallax>
        <Parallax
          offsetYMax={20}
          offsetYMin={-20}
        >
          <div className="hub-title">
            <HubTitle />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Header;
