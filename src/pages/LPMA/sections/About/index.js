import React, {PureComponent} from 'react';
import {LPMATitle} from 'icons';
import AboutSection from 'components/Sections/About';

import './index.styl';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: 2018,
          client: 'LPMA',
          services: 'UX- and UI- Design, Development',
        }}
        story={{
          name: 'Customer Excellence Program',
          desc: 'is enabling real estate agency principals to gather insights about their tenants\' experiences.',
        }}

        logo={
          <div className="logo">
            <LPMATitle />
            <div className="logo-bg">
              <img alt="LPMA" src={require('./img/logo-bg.png')} />
            </div>
          </div>
        }
      />
    );
  }
}

export default About;
