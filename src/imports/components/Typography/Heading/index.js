import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Title extends PureComponent {
  static propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    animated: PropTypes.bool
  };

  static defaultProps = {
    subTitle: '',
    title: '',
    animated: false
  };

  render() {
    return (
      <div className="heading">
        <div className="sub-title">{this.props.subTitle}</div>
        <div
          className="title"
          data-aos={this.props.animated && 'fade-up'}
          data-aos-easing={this.props.animated && 'ease-out-sine'}
          data-aos-delay={this.props.animated && '125'}
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Title;
