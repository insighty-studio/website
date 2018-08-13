import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';
import './mobile/index.styl';

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
    const {subTitle, title} = this.props;
    return (
      <div className="section-heading">
        <div className="sub-title">
          {subTitle}
        </div>
        <div className="title">
          {title}
        </div>
      </div>
    );
  }
}

export default SectionHeading;
