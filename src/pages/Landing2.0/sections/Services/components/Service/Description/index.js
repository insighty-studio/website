import React, {PureComponent} from 'react';

import './index.styl';

class Description extends PureComponent {
  render() {
    const {title, subtitle, text} = this.props;

    return (
      <div className="service-description">
        <div className="service-title">
          <div className="title-line" />
          {title}
        </div>
        <div className="service-subtitle">{subtitle}</div>
        <div className="service-text">{text}</div>
      </div>
    );
  }
}

export default Description;
