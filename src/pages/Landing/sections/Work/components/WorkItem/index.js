import React from 'react';

import './work-item.styl';

const WorkItem = ({title, color}) => (
  <div className="work-item">
    <div>
      <span>{title}</span>
      <span style={{color}}>.</span>
    </div>
  </div>
);

export default WorkItem;
