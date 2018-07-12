import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SectionHeading extends PureComponent {
  static propTypes = {
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
		style: PropTypes.object
  };

  static defaultProps = {
		firstLine: '',
		secondLine: '',
		style: null
  };

  render() {
    return (
      <div className="section-heading" style={this.props.style}>
        <div>{this.props.firstLine}</div>
        <div>{this.props.secondLine}</div>
      </div>
    );
  }
}

export default SectionHeading;
