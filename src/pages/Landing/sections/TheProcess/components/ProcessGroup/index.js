import React from 'react';

import './progress-group.styl';

const ProcessGroup = ({style, children}) => (
  <div className="process-group" style={style}>{children}</div>
);

export default ProcessGroup;
