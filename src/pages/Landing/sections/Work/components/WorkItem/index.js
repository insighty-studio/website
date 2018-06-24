import React from 'react';

import './index.styl';

//TODO for changes is coming soon. Temporary implementation.

const WorkItem = ({title, color}) => (
  <div className="work-item">
    <div>
      <span>{title}</span>
      <span style={{color}}>.</span>
    </div>
  </div>
);

export default WorkItem;
