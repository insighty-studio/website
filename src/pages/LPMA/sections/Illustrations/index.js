import React, {PureComponent} from 'react';

import './index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <span className="illustrations-header">
          Product Development
        </span>
        <div className="illustrations-image">
          <img alt="LPMA" src={require('./img/laptops.png')} />
        </div>
      </div>
    );
  }
}

export default Illustrations;
