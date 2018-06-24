import React from 'react';

import './index.styl';

const Logo = ({motto}) => (
  <div className="logo">
    <div className="logo-title">
      <span>Insighty</span>
      <span>.</span>
    </div>
    <div className="logo-motto">{motto}</div>
  </div>
);

export default Logo;
