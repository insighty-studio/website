import React, {PureComponent} from 'react';

import './styles/loader.styl';

class Loader extends PureComponent {
  render() {
    return (
      <div className="loader-page">
        <div className="logo-title">
          Insighty
          <span>.</span>
        </div>
      </div>
    );
  }
}

export default Loader;
