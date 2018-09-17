import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'ebony clay', color: '#262C40', width: '40%'},
          {name: 'mantis', color: '#61CB65', width: '30%'},
          {name: 'white', color: '#FFFFFF', width: '15%'},
          {name: 'mako', color: '#42454F', width: '15%'},
        ]}
        colorsSectionColor="#313649"
      />
    );
  }
}

export default Colors;
