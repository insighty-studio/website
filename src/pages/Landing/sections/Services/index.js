import React, {PureComponent} from 'react';
import SectionHeading from 'components/Typography/SectionHeading';

import Service from './components/Service';
import {Design, Development, Quality} from './services';

import './index.styl';
import './mobile/index.styl';

class Services extends PureComponent {
  render() {
    return (
      <div className="services" id="services">
        <SectionHeading subTitle="our" title="services" />
        <div className="service-list">
          <Service
            left
            icons={Design}
            subtitle="Design"
            title="Create experiences your users will love"
            text="Good design doesn’t stand out. Good design is invisible.
            We design applications that intuitively meet the needs of your customers and,
            in turn, keep them sticking around for good."
          />
          <Service
            icons={Development}
            subtitle="Development"
            title="See your app in weeks, not months"
            text="You hate software projects that drag on. So do we. That’s why our team creates
            interactive prototypes within weeks of your brief so you can visualize the end product and
            request adjustments as quickly as possible."
          />
          <Service
            left
            icons={Quality}
            subtitle="Quality"
            title="Get pristine code the first time around"
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
