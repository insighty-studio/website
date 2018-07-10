import React, {PureComponent} from 'react';

import Preview from './sections/Preview';
import Description from './sections/Description';
import Logo from './sections/Logo';

import './index.styl'

class BetterYet extends PureComponent {
  render() {
    return (
      <div className="betteryet-page">
        <Preview />
        <Description />
        <Logo />
      </div>
    );
  }
}

export default BetterYet;
