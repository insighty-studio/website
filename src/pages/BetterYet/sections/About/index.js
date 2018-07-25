import React, {PureComponent} from 'react';
import AboutSection from 'components/Sections/About';

import './index.styl';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: 2018,
          client: 'BetterYet',
          services: 'UX and UI Design, Development'
        }}
        story={{
          name: 'BetterYet',
          desc: 'missions is to equip small and medium-sized businesses with a simple way to set up loyalty '
          + 'programs for the local shoppers. We are taking care of all the technology related issues from '
          + 'concept to design to implementation.'
        }}
      />
    );
  }
}

export default About;
