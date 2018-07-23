import React, {PureComponent} from 'react';
import FooterSection from 'components/Sections/Footer';
import {lpmaGreen, lpmaDarkGray, betteryetOrangeYellow, betteryetYellow} from 'styles/config';

import './index.styl';

class Footer extends PureComponent {
  render() {
    return (
      <FooterSection
        projects={[
          {name: 'LPMA', color: lpmaGreen, backgroundColor: lpmaDarkGray, link: '/lpma'},
          {name: 'BetterYet', color: betteryetOrangeYellow, backgroundColor: betteryetYellow, link: '/betteryet'},
        ]}
      />
    );
  }
}

export default Footer;
