import React, {Component} from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/typography/Heading';
import ImpactBG from 'icons/backgrounds/ImpactBG';

import './index.styl';
import './mobile/index.styl';

class Impact extends Component {
  render() {
    return (
      <div className="impact-page">

        <Header />

        <div className="impact-content">
          <div className="impact-bg">
            <ImpactBG className="impact-svg" />
          </div>

          <Heading className="impact-heading">Profits Paired With Purpose</Heading>

          <p className="impact-description">
            For any commercial project that you do with us, we build a
            mobile app for an entrepreneur with a socially impactful cause.
            Pro bono.
          </p>
          <p className="impact-description">
            We call people that envision a better tomorrow &#39;heros&#39;. Whether
            you&#39;re a hero that can afford our services or not, we want to
            know you.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Impact;
