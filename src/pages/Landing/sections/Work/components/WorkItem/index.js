import React from 'react';
import OpacityAnimation from 'imports/components/OpacityAnimation';

import './work-item.styl';

const WorkItem = ({title, color, delay}) => (
  <div className="work-item">
    <OpacityAnimation delay={delay}>
      <span>{title}</span>
      <span style={{color}}>.</span>
    </OpacityAnimation>
  </div>
);

export default WorkItem;
