import React, {PureComponent} from 'react';

import LeftImage from './images/left.png';
import RightOneImage from './images/right-one.png';
import RightTwoImage from './images/right-two.png';
import RightThreeImage from './images/right-three.png';
import './index.styl';

class Screens extends PureComponent {
  render() {
    return (
      <div className="screens-section">
        <div className="screens-images">
          <div className="left">
            <img alt="Booqed first screen" src={LeftImage} />
          </div>
          <div className="right">
            <img alt="Booqed second screen" src={RightOneImage} />
            <img alt="Booqed second screen" src={RightTwoImage} />
            <img alt="LPMA" src={RightThreeImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Screens;
