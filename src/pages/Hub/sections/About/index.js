import React, {PureComponent} from 'react';
import AboutSection from 'components/Sections/About';

import './index.styl';
import './mobile/index.styl';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: '2018',
          client: 'HUB 4.0',
          services: 'UX and UI Design, Development',
        }}
        story={{
          title: 'Upgrade coworking experience & Connect the community',
          desc: 'This app is designed to elevate the coworking experience for members of the space we reside in. '
            + 'Hub 4.0 delights members with a seamless meeting room booking experience. It also brings the '
            + 'community events to life.',
          subtitle: 'Mission',
        }}
      />
    );
  }
}

export default About;
