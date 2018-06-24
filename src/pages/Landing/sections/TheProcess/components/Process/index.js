import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

const Process = ({color, step, title, description, rightHand}) => (
  <div className={classnames('process', rightHand && 'right-hand')}>
    <div className="process-circle" style={{background: color}} />
    <div className="process-title">
      <span>{step}</span>
      <span>{title}</span>
    </div>
    <div className="process-description">{description}</div>
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
