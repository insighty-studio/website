import React from 'react';

import './description.styl';

const Description = ({title, text}) => (
  <div className="description">
    <div>
      <span>{title}</span>
      {text}
    </div>
  </div>
);

export default Description;
