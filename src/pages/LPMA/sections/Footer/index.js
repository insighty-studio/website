import React, {PureComponent} from 'react';
import FooterSection from 'components/Sections/Footer';

import './index.styl';

class Footer extends PureComponent {
  render() {
    return (
      <FooterSection
        projects={[
          {name: 'SuperHero', color: '#5B5B5B', backgroundColor: '#272730'},
          {name: 'BetterYet', color: '#F8C91C', backgroundColor: '#FFDF4A'},
        ]}
      />
    );
  }
}

export default Footer;
