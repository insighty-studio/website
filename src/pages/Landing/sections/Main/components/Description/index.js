import React from 'react';

import './index.styl';

const Description = ({title, text}) => {
  return (
    <div className="description">
      <div>
        <span>{title}</span>
        {text}
      </div>
    </div>
  );
};

export default Description;
