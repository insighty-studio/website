import React, {PureComponent} from 'react';

import {SuperHeroLogo, AboutLightning} from './icons';

import './index.styl';

class About extends PureComponent {
  render() {
    return (
      <div className="about-section">
        <div className="section-name">About</div>
        <div className="desc">
          <div className="short">
            <ul>
              <li><span>Year: </span>2018</li>
              <li><span>Client: </span>SuperHero</li>
              <li><span>Services: </span>UX- and UI-Design, Web platform & Mobile App development</li>
            </ul>
          </div>
          <div className="story">
            <span>SuperHero</span>
            mission is to equip small and medium-sized businesses with the means to make travel
            expenses part of a frictionless and simple experience.
          </div>
        </div>
        <div className="logo">
          <SuperHeroLogo />
          <div className="logo-bg"><AboutLightning /></div>
        </div>
      </div>
    );
  }
}

export default About;
