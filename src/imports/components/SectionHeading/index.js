import React, {PureComponent} from 'react';

import './styles/section-heading.styl';

class SectionHeading extends PureComponent {
  render() {
    const {style, title} = this.props;
    return (
      <div className="section-heading" style={style}>
        <div className="section-heading-title">{title}</div>
        <div className="section-heading-bg-container">
          <div className="section-heading-bg" />
        </div>
      </div>
    );
  }
}

export default SectionHeading;
