import React, {PureComponent} from 'react';

import Details from './components/Details';
import Goal from './components/Goal';

import './index.styl';

class Description extends PureComponent {
  render() {
    return (
      <div className="by-description">
        <div className="by-description-content">
          <Details
            year="2018"
            client="BetterYet"
            services="UX- and UI-Design, Web platform & Mobile App development"
          />
          <Goal />
        </div>
      </div>
    );
  }
}

export default Description;
