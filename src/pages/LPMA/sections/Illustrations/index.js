import React, {PureComponent} from 'react';
import LaptopsImage from './img/laptops.png';

import './index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <span className="illustrations-header">
          Product Development
        </span>
        <div className="illustrations-image">
          <img alt="LPMA" src={LaptopsImage} />
        </div>
      </div>
    );
  }
}

export default Illustrations;
