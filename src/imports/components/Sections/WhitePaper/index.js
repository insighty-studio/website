import React, {PureComponent} from 'react';

import './index.styl';

class WhitePaper extends PureComponent {
  render() {
    const {children} = this.props;

    return (
      <div className="white-paper">
        <div className="paper-width">
          {children}
        </div>
      </div>
    );
  }
}

export default WhitePaper;
