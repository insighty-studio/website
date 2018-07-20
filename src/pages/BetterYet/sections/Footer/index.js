import React, {PureComponent} from 'react';
import FooterSection from 'components/Sections/Footer';

class Footer extends PureComponent {
  render() {
    return (
      <FooterSection
        projects={[
          {name: 'CET', color: '#7ED321', backgroundColor: '#464F53'},
          {name: 'BetterYet', color: '#F8C91C', backgroundColor: '#FFDF4A'},
        ]}
      />
    );
  }
}

export default Footer;
