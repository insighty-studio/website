import React from 'react';

import './service.styl';

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
