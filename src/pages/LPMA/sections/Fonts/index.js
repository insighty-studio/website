import React, {PureComponent} from 'react';
import FontSection from 'components/Sections/Font';

import './index.styl';

class Fonts extends PureComponent {
  render() {
    return (
      <FontSection
        name="Rubik"
        company="Google Font"
        desc="Rubik is a sans serif font family with slightly rounded corners designed by
        Philipp Hubert and Sebastian Fischer at Hubert & Fischer as part of the Chrome Cube Lab project.
        Rubik is a 5 weight family with Roman and Italic styles, that accompanies Rubik Mono One,
        a monospaced variation of the Black roman design. Meir Sadan redesigned the Hebrew component in 2015.
        Alexei Vanyashin redesigned the Cyrillic component in 2016."
      />
    );
  }
}

export default Fonts;
