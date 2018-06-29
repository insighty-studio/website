import React from 'react';

import './description.styl';

const Description = ({title, text}) => (
  <div className="description">
    <span>{title}</span>
    {text}
  </div>
);

export default Description;
