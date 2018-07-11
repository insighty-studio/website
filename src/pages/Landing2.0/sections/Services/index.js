import React, {PureComponent} from 'react';

import Service from './components/Service';
import {Design, Development, Quality} from './services';

import './index.styl';

class Services extends PureComponent {
  render() {
    return (
      <div className="services" id="services">
        <div className="services-heading">
          Services
        </div>
        <div className="services">
          <Service
            left
            icons={Design}
            title="Design"
            subtitle="Create experiences your users will love"
            text="Good design doesn’t stand out. Good design is invisible.
            We design applications that intuitively meet the needs of your customers and,
            in turn, keep them sticking around for good."
          />
          <Service
            icons={Development}
            title="Development"
            subtitle="See your app in weeks, not month"
            text="You hate software projects that drag on. So do we. That’s why our team creates interactive prototypes
            within weeks of your brief so you can visualize the end product and
            request adjustments as quickly as possible."
          />
          <Service
            left
            icons={Quality}
            title="Quality"
            subtitle="Get pristine code the first time round"
            text="Software development is expensive and unpredictable. But it doesn’t have to be.
            With over a decade of experience and a strategic approach, our team creates flawless applications that
            work exactly as you had envisioned."
          />
        </div>
      </div>
    );
  }
}

export default Services;
