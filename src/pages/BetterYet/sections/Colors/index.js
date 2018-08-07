import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'mustard', color: '#FFDF4A', width: '40%'},
          {name: 'lightning yellow', color: '#F8C91C', width: '30%'},
          {name: 'mine shaft', color: '#272727', width: '15%'},
          {name: 'dusty gray', color: '#979797', width: '15%'}
        ]}
        colorsSectionColor="#93BBD8"
      />
    );
  }
}

export default Colors;
