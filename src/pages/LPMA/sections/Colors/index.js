import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';
import {black} from 'styles/config';

import './styles/web.styl';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'mako', color: '#464F53', width: '40%'},
          {name: 'mantis', color: '#6EBF56', width: '25%'},
          {name: 'matskill chite', color: '#E9F1F5', width: '20%'},
          {name: 'black', color: black, width: '15%'}
        ]}
        colorsSectionColor="#515A5D"
      />
    );
  }
}

export default Colors;
