import React, {PureComponent} from 'react';
import LaptopsImage from './img/laptops.png';

import './index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <img alt="LPMA" src={LaptopsImage} />
      </div>
    );
  }
}

export default Illustrations;
