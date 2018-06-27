import React from 'react';

import './index.styl';

const SectionHeading = ({style, title}) => (
  <div className="section-heading" style={style}>
    <span>{title}</span>
  </div>
);

export default SectionHeading;
