import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './process.styl';

const Process = ({color, step, title, description}) => (
  <div className={classnames('process')}>
    <div className="process-circle">
      <div className="circle" style={{background: color}} />
    </div>
    <div className="process-title">
      <span>{step}</span>
      {title}
    </div>
    <div className="process-desc">{description}</div>
  </div>
);

Process.propTypes = {
  color: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rightHand: PropTypes.bool,
};

Process.defaultProps = {
  color: '#000',
  step: '',
  title: '',
  description: '',
  rightHand: false,
};

export default Process;
