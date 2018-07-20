import React, {PureComponent} from 'react';
import FontSection from 'components/Sections/Font';

class Fonts extends PureComponent {
  render() {
    return (
      <FontSection
        name="Quicksand"
        company="Google Font"
        desc="Quicksand is a display sans serif with rounded terminals.
            The project was initiated by Andrew Paglinaw an in 2008 using geometric shapes as a core foundation.
            It is designed for display purposes but kept legible enough to use in small sizes as well. In 2016,
            in collaboration with Andrew, it was thoroughly revised by Thomas Jockin to improve the quality."
      />
    );
  }
}

export default Fonts;
