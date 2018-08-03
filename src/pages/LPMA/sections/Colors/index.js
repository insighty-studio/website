import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';
import {black} from 'styles/config';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'Mako', color: '#464F53', width: '40%'},
          {name: 'Mantis', color: '#6EBF56', width: '25%'},
          {
            name: 'Catskill White', color: '#E9F1F5', width: '20%', dark: true
          },
          {name: 'Black', color: black, width: '15%'}
        ]}
        colorsSectionColor="#515A5D"
      />
    );
  }
}

export default Colors;
