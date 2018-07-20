import React, {PureComponent} from 'react';

import './index.styl';

class Screens extends PureComponent {
  render() {
    return (
      <div className="screens-section">
        <span className="screens-header">
          UI/UX Design
        </span>
        <div className="screens-images">
          <div className="left">
            <img alt="LPMA" src={require('./img/left.png')} />
          </div>
          <div className="right">
            <img alt="LPMA" src={require('./img/right-one.png')} />
            <img alt="LPMA" src={require('./img/right-two.png')} />
            <img alt="LPMA" src={require('./img/right-three.png')} />

          </div>
        </div>
      </div>
    );
  }
}

export default Screens;
