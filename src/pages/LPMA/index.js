import React, {PureComponent} from 'react';

import Main from './sections/Main';

import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Main />
      </div>

    );
  }
}

export default LPMA;
