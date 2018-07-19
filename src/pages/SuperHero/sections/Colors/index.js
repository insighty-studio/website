import React, {PureComponent} from 'react';
import ColorsSection from 'components/Sections/Colors';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: "Charade", color: "#272730"},
          {name: "School bus yellow", color: "#FFD900"},
          {name: "Caribbean Green", color: "#09CE95"},
          {name: "Black", color: "#000000"}
        ]}
      />
    );
  }
}

export default Colors;
