import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import LeftImage from './img/left.png';
import LeftImageWebp from './img/left.webp';
import RightOneImage from './img/right-one.png';
import RightOneImageWebp from './img/right-one.webp';
import RightTwoImage from './img/right-two.png';
import RightTwoImageWebp from './img/right-two.webp';
import RightThreeImage from './img/right-three.png';
import RightThreeImageWebp from './img/right-three.webp';

import './index.styl';

class Screens extends PureComponent {
  render() {
    return (
      <div className="screens-section">
        <div className="screens-images">
          <div className="left">
            <Image alt="LPMA" src={LeftImage} webp={LeftImageWebp} />
          </div>
          <div className="right">
            <Image alt="LPMA" src={RightOneImage} webp={RightOneImageWebp} />
            <Image alt="LPMA" src={RightTwoImage} webp={RightTwoImageWebp} />
            <Image alt="LPMA" src={RightThreeImage} webp={RightThreeImageWebp} />
          </div>
        </div>
      </div>
    );
  }
}

export default Screens;
