import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OpacityAnimation from 'imports/components/OpacityAnimation';
import classnames from 'classnames';

import './index.styl';

class Process extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    step: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    color: '#000',
    step: '',
    title: '',
    description: '',
  };

  render() {
    const {color, step, title, description} = this.props;

    return (
      <div className={classnames('process')}>
        <OpacityAnimation delay={100}>
          <div className="process-circle">
            <div className="circle" style={{background: color}} />
          </div>
        </OpacityAnimation>
        <OpacityAnimation delay={500}>
          <div className="process-title">
            <span>{step}</span>
            {title}
          </div>
          <div className="process-desc">{description}</div>
        </OpacityAnimation>
      </div>
    );
  }
}

export default Process;
