import React from 'react';

import './index.styl';

const Logo = ({description}) => {
  return (
    <div className="logo">
      <div className="logo-title">
        <span>Insighty</span>
        <span>.</span>
      </div>
      <div className="logo-motto">{description}</div>
    </div>
  )
};

export default Logo;
