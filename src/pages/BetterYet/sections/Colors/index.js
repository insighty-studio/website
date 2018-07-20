import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: "Mustard", color: "#FFDF4A"},
          {name: "Lightning Yellow", color: "#F8C91C"},
          {name: "Mine Shaft", color: "#272727"},
          {name: "Dusty Gray", color: "#979797"}
        ]}
      />
    );
  }
}

export default Colors;
