import React, {PureComponent} from 'react';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Paragraph from 'components/typography/Paragraph/index';

import './index.styl';
import './mobile/index.styl';

class Step extends PureComponent {
  static propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    hiddenLine: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool,
  };

  static defaultProps = {
    hiddenLine: false,
    first: false,
    last: false,
  };

  render() {
    const {
      title, desc, number, hiddenLine, first, last
    } = this.props;
    return (
      <div className="step">
        <div className="number">
          {(hiddenLine && !isMobile)
            ? null : <div className={classnames('line', first && 'first', last && 'last')} />}
          <div className="circle" data-aos="fade-right">
            {number}
          </div>
        </div>
        <div className="info">
          <div className="title" data-aos="fade-in" data-aos-easing="ease-in-sine">
            {title}
          </div>
          <Paragraph data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="250">
            {desc}
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default Step;
