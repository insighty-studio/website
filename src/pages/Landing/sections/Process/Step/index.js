import React, {PureComponent} from 'react';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Paragraph from 'components/Typography/Paragraph/index';

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
          {(hiddenLine && !isMobile) ? null : <div className={classnames('line', first && 'first', last && 'last')} />}
          <div className="circle">
            {number}
          </div>
        </div>
        <div className="info">
          <div className="title">
            {title}
          </div>
          <Paragraph>
            {desc}
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default Step;
