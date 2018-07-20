import React, {PureComponent} from 'react';

import ColorsSection from 'components/Sections/Colors';

import './index.styl';

class Colors extends PureComponent {
  render() {
    return (
      <ColorsSection
        colors={[
          {name: "Mako", color: "#464F53"},
          {name: "Mantis", color: "#6EBF56"},
          {name: "Catskill White", color: "#E9F1F5"},
          {name: "Black", color: "#000000"}
        ]}
      />
    );
  }
}

export default Colors;
