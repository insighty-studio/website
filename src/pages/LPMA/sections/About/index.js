import React, {PureComponent} from 'react';
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
          title: 'Real estate agency principals to gather insights',
          desc: 'Customer Excellence Program is enabling real estate agency principals '
          + 'to gather insights about their tenants experiences.',
          subtitle: 'Mission'
        }}
      />
    );
  }
}

export default About;
