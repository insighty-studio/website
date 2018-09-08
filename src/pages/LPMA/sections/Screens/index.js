import React, {PureComponent} from 'react';
import LeftImage from './img/left.png';
import RightOneImage from './img/right-one.png';
import RightTwoImage from './img/right-two.png';
import RightThreeImage from './img/right-three.png';

import './index.styl';

class Screens extends PureComponent {
  render() {
    return (
      <div className="screens-section">
        <div className="screens-images">
          <div className="left">
            <img alt="LPMA" src={LeftImage} />
          </div>
          <div className="right">
            <img alt="LPMA" src={RightOneImage} />
            <img alt="LPMA" src={RightTwoImage} />
            <img alt="LPMA" src={RightThreeImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Screens;
