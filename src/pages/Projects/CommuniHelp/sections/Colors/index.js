import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';

import './index.styl';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'white Smoke', color: '#F4F4F4', width: '40%'},
          {name: 'dark violet', color: '#7B2ACC', width: '30%'},
          {name: 'nobel', color: '#9B9B9B', width: '15%'},
          {name: 'froly', color: '#F47883', width: '15%'},
        ]}
        colorsSectionColor="#313649"
      />
    );
  }
}

export default Colors;
