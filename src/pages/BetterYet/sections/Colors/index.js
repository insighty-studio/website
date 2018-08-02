import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';
import {betteryetYellow, betteryetOrangeYellow} from 'styles/config';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'Mustard', color: betteryetYellow, width: '40%'},
          {name: 'Lightning Yellow', color: betteryetOrangeYellow, width: '30%'},
          {name: 'Mine Shaft', color: '#272727', width: '15%'},
          {name: 'Dusty Gray', color: '#979797', width: '15%'}
        ]}
        colorsSectionColor="#93BBD8"
      />
    );
  }
}

export default Colors;
