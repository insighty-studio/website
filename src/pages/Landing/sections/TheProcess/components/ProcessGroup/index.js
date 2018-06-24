import React from 'react';

import './index.styl';

const ProcessGroup = ({style, children}) => (
  <div className="process-group" style={style}>{children}</div>
);

export default ProcessGroup;
