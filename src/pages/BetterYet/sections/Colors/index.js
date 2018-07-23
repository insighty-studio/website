import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';
import './index.styl';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: 'Mustard', color: "#FFDF4A", width: '40%'},
          {name: "Lightning Yellow", color: "#F8C91C", width: '30%'},
          {name: "Mine Shaft", color: "#272727", width: '15%'},
          {name: "Dusty Gray", color: "#979797", width: '15%'}
        ]}
      />
    );
  }
}

export default Colors;
