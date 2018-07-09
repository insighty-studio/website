import React, {PureComponent} from 'react';
import SectionHeading from 'imports/components/SectionHeading';
import OpacityAnimation from 'imports/components/OpacityAnimation';
import Service from './components/Service';

import './index.styl';

class Services extends PureComponent {
  render() {
    return (
      <div className="services" id="services">
        <SectionHeading title="Services" />
        <div className="service-list">
          <div className="service-list-items">
            <OpacityAnimation delay={100}>
              <Service
                title="Create experiences your users will love"
                description="Good design doesn’t stand out. Good design is invisible.
                We design applications that intuitively meet the needs of your customers and,
                in turn, keep them sticking around for good."
              />
            </OpacityAnimation>
            <OpacityAnimation delay={300}>
              <Service
                  title="See your app in weeks, not month"
                  description="You hate software projects
                  that drag on. So do we. That’s why our team creates interactive prototypes within weeks
                  of your brief so you can visualize the end product and request adjustments as quickly as possible."
                />
            </OpacityAnimation>
            <OpacityAnimation delay={500}>
              <Service
                title="Get pristine code the first time round"
                description="Software development is expensive and unpredictable. But it doesn’t have to be.
                With over a decade of experience and a strategic approach, our team creates
                flawless applications that work exactly as you had envisioned."
              />
            </OpacityAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
