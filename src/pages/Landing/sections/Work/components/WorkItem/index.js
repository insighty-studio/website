import React from 'react';
import {Link} from 'react-router-dom';
import OpacityAnimation from 'imports/components/OpacityAnimation';

import './work-item.styl';

const WorkItem = ({title, color, delay, link}) => (
  <div className="work-item">
      <OpacityAnimation delay={delay}>
        <Link to={link}>
          <span>{title}</span>
          <span style={{color}}>.</span>
        </Link>
      </OpacityAnimation>
  </div>
);

export default WorkItem;
