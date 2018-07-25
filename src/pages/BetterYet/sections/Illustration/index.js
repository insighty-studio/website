import React, {PureComponent} from 'react';
import notebook from './images/notebook.png';

import './index.styl';

class Illustration extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <div className="notebook-illustration">
          <img alt="" src={notebook} />
        </div>
      </div>
    );
  }
}

export default Illustration;
