import React from 'react';

import './index.styl';

const Footer = ({address, email}) => (
  <div className="footer">
    <div className="footer-details">
      {address}<br />
      {email}
    </div>
    <div className="rights">
      © 2018 Insighty All Rights Reserved
    </div>
  </div>
);

export default Footer;
