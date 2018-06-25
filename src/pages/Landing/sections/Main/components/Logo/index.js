import React from 'react';

import './logo.styl';

const Logo = ({desc}) => (
  <div className="logo">
    <div className="logo-title">
      <span>Insighty</span>
      <span>.</span>
    </div>
    <div className="logo-motto">{desc}</div>
  </div>
);

export default Logo;
