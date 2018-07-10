import React from 'react';

import './index.styl';

const Service = ({title, description}) => (
  <div className="service">
    <h1 className="service-title">
      {title}
    </h1>
    <div className="service-description">
      {description}
    </div>
  </div>
);

export default Service;
