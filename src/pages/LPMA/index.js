import React, {PureComponent} from 'react';

import Main from './sections/Main';
import Description from './sections/Description';

import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Main />
        <Description />
      </div>

    );
  }
}

export default LPMA;
