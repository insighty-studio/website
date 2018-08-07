import React, {PureComponent} from 'react';
import AboutSection from 'components/Sections/About';

import './styles/web.styl';

class About extends PureComponent {
  render() {
    return (
      <AboutSection
        shortDesc={{
          year: '2018',
          client: 'LPMA',
          services: 'UX- and UI- Design, Development',
        }}
        story={{
          title: 'Helping real estate principals achieve customer excellence',
          desc: 'The Customer Excellence program equips real estate agencies to survey their clients. '
          + 'This is a major breakthrough in their understanding of the clients experiences and satisfaction levels.',
          subtitle: 'Mission'
        }}
      />
    );
  }
}

export default About;
