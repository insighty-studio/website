import React, {PureComponent} from 'react';

import './index.styl';

class Goal extends PureComponent {
  render() {
    return (
      <div className="by-description-goal">
        <div>
          <span>BetterYet</span> mission is to equip small and medium-sized businesses with the
          means to make travel expenses part of a frictionless and simple experience.
        </div>
        <div>
          <br/>The team from BetterYet approached us with the challenge to create an easy-to-use product
          with a friendly design language. We started with a collaborative design sprint to figure out what would be
          valuable
          to customers as a first release. We challenged our ideas with domain experts and got a better idea of which
          track we should be on.
          This gave us the perfect head start for the brand and the digital products. The brand and design language
          dismisses the utilitarian look and feel of the competitive environment.
        </div>
        <div>
          <br/>Working in close collaboration with BetterYet’s product and business team we were able to shift the
          business from a start up to a serious competitor in the business travel sector.
        </div>
      </div>
    );
  }
}

export default Goal;
