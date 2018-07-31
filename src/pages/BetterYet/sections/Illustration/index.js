import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import notebook from './images/notebook.png';
import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <Parallax
          offsetYMax={10}
          offsetYMin={-10}
        >
          <div className="notebook-illustration">
            <img alt="" src={notebook} />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Illustration;
