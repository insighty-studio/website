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
          client: 'CommuniHelp',
          services: 'UX and UI Design, Development',
        }}
        story={{
          title: 'Smart way to volunteer',
          desc: 'Communihelp is a smarter way to volunteer.'
            + 'The app helps skilled professionals impact the causes they care about.'
            + 'We optimized search and application processes so now the '
            + 'candidate can find the right position just in minutes..',
          subtitle: 'Mission',
        }}
      />
    );
  }
}

export default About;
