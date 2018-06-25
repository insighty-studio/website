import React, {Component} from 'react';

import SectionHeading from 'components/SectionHeading';

import Service from './components/Service';

import './services-section.styl';

class Services extends Component {
  render() {
    return (
      <div className="services" id="services">
        <SectionHeading title="Services" />
        <div className="service-list">
          <div className="service-list-items">
            <Service
              title="Create experiences your users will love"
              description="Good design doesn’t stand out. Good design is invisible.
              We design applications that intuitively meet the needs of your customers and,
              in turn, keep them sticking around for good."
            />
            <Service
              title="See your app in weeks, not month"
              description="You hate software projects
              that drag on. So do we. That’s why our team creates interactive prototypes within weeks
              of your brief so you can visualize the end product and request adjustments as quickly as possible."
            />
            <Service
              title="Get pristine code the first time round"
              description="Software development is expensive and unpredictable. But it doesn’t have to be.
              With over a decade of experience and a strategic approach, our team creates
              flawless applications that work exactly as you had envisioned."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
