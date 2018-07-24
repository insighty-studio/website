import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class SectionHeading extends PureComponent {
  static propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    subTitle: '',
    title: ''
  };

  render() {
    return (
      <div className="section-heading">
        <div className="sub-title">{this.props.subTitle}</div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default SectionHeading;
