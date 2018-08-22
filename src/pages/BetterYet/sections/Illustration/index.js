import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import leftNotebook from './images/left-notebook.png';
import rightNotebook from './images/right-notebook.png';

import './index.styl';
import './mobile/index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <Parallax
          offsetYMax={15}
          offsetYMin={-15}
        >
          <div className="left-notebook-illustration">
            <img alt="" src={leftNotebook} />
          </div>
        </Parallax>
        <Parallax
          offsetYMax={30}
          offsetYMin={-30}
        >
          <div className="right-notebook-illustration">
            <img alt="" src={rightNotebook} />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Illustration;
