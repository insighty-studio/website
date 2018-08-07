import React, {PureComponent} from 'react';
import WebParallax from 'components/WebParallax';

import notebook from './images/notebook.png';

import './styles/web.styl';
import './styles/iphones.styl';
import './styles/iphone5.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <WebParallax
          offsetYMax={10}
          offsetYMin={-10}
        >
          <div className="notebook-illustration">
            <img alt="" src={notebook} />
          </div>
        </WebParallax>
      </div>
    );
  }
}

export default Illustration;
