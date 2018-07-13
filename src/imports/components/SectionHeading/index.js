import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SectionHeading extends PureComponent {
  static propTypes = {
    subText: PropTypes.string,
    text: PropTypes.string,
		style: PropTypes.object
  };

  static defaultProps = {
		subText: '',
		text: '',
		style: null
  };

  render() {
    return (
      <div className="section-heading" style={this.props.style}>
        <div>{this.props.subText}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default SectionHeading;
