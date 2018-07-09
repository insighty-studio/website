import React, {PureComponent} from 'react';

import './index.styl';

class Description extends PureComponent {
  render() {
    const {title, text} = this.props;
    return (
      <div className="main-description">
        <span>{title}</span>
        {text}
      </div>
    );
  }
}

export default Description;
