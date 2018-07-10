import React, {PureComponent} from 'react';

class Fonts extends PureComponent {
  render() {
    return (
      <div className="fonts-section">
        <div className="font-main-info">
          <div className="font-name">
            <div className="name">Quicksand</div>
            <div className="company"><span>by</span> Google Font</div>
          </div>
          <div className="font-desc">
            Quicksand is a display sans serif with rounded terminals.
            The project was initiated by Andrew Paglinawan in 2008 using geometric shapes as a core foundation.
            It is designed for display purposes but kept legible enough to use in small sizes as well. In 2016,
            in collaboration with Andrew, it was thoroughly revised by Thomas Jockin to improve the quality.
          </div>
        </div>
        Fonts Component
      </div>
    );
  }
}

export default Fonts;
