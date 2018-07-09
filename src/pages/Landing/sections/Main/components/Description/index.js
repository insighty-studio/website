import React from 'react';

import './main-description.styl';

const Description = ({title, text}) => (
  <div className="main-description">
    <span>
      {title}
    </span>
    {text}
  </div>
);

export default Description;
