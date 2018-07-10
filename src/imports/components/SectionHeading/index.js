import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SectionHeading extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: ''
  };

  render() {
    return (
      <div className="section-heading">
        <div className="section-heading-title">
          {this.props.title}
        </div>
        <div className="section-heading-bg-container">
          <div className="section-heading-bg" />
        </div>
      </div>
    );
  }
}

export default SectionHeading;
