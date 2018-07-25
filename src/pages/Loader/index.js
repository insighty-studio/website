import React, {PureComponent} from 'react';
import {InsightyLogo} from 'icons';

import './index.styl';

class Loader extends PureComponent {
  render() {
    return (
      <div className="loader-page">
        <div className="loader">
          <InsightyLogo />
          <div className="light-shade" />
          <div className="dark-shade" />
        </div>
      </div>
    );
  }
}

export default Loader;
