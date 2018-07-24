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
  	const {animated, subTitle, title} = this.props;

    return (
      <div className="heading">
        {subTitle && <div className="sub-title">{subTitle}</div>}
        <div
          className="title"
          data-aos={animated && 'fade-up'}
          data-aos-easing={animated && 'ease-out'}
          data-aos-delay={animated && '40'}
        >
          {title}
        </div>
      </div>
    );
  }
}

export default Title;
