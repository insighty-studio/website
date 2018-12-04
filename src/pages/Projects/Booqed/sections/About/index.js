import React, {PureComponent} from 'react';
import AboutSection from 'components/Sections/About';

import './index.styl';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: '2018',
          client: 'Booqed',
          services: 'UX and UI Design',
        }}
        story={{
          title: 'The marketplace for unique and flexible spaces',
          desc: 'Booqed is a digital marketplace for flexible space, '
            + 'helping to connect businesses needing places to work, '
            + 'meet or host an event, with landlords seeking to monetize under-utilized space.',
          subtitle: 'Mission',
        }}
      />
    );
  }
}

export default About;
