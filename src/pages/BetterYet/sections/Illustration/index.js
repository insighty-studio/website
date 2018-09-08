import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import {Parallax} from 'react-scroll-parallax';

import leftNotebook from './images/left-notebook.png';
import leftNotebookWebp from './images/left-notebook.webp';
import rightNotebook from './images/right-notebook.png';
import rightNotebookWebp from './images/right-notebook.webp';

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
            <Image
              src={leftNotebook}
              webp={leftNotebookWebp}
            />
          </div>
        </Parallax>
        <Parallax
          offsetYMax={30}
          offsetYMin={-30}
        >
          <div className="right-notebook-illustration">
            <Image
              src={rightNotebook}
              webp={rightNotebookWebp}
            />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Illustration;
