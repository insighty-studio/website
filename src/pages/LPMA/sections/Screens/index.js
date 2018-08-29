import React, {PureComponent} from 'react';
import LeftImage from './img/left.webp';
import RightOneImage from './img/right-one.webp';
import RightTwoImage from './img/right-two.webp';
import RightThreeImage from './img/right-three.webp';

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
