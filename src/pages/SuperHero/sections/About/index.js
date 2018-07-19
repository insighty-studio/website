import React, {PureComponent} from 'react';
import AboutSection from 'components/Sections/About';

import {SuperHeroLogo, AboutLightning} from './icons';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: 2018,
          client: 'SuperHero',
          services: 'UX- and UI-Design, Web platform & Mobile App development'
        }}
        story={{
          name: 'SuperHero',
          desc: 'mission is to equip small and medium-sized businesses with the means to make travel ' +
          'expenses part of a frictionless and simple experience.'
        }}
        logo={
          <div className="logo">
            <SuperHeroLogo />
            <div className="logo-bg"><AboutLightning /></div>
          </div>
        }
      />
    );
  }
}

export default About;
