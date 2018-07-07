import React from 'react';
import PropTypes from 'prop-types';
import OpacityAnimation from 'imports/components/OpacityAnimation';
import classnames from 'classnames';

import './process.styl';

const Process = ({color, step, title, description}) => (
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

Process.propTypes = {
  color: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Process.defaultProps = {
  color: '#000',
  step: '',
  title: '',
  description: '',
};

export default Process;
