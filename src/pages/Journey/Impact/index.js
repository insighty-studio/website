import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import ImpactBG from 'icons/backgrounds/ImpactBG';

import './index.styl';
import './mobile/index.styl';

class Impact extends Component {
  render() {
    return (
      <Page className="impact-page">
        <Parallax
          className="impact-bg"
          offsetYMax={10}
          offsetYMin={-30}
        >
          <ImpactBG className="impact-svg" />
        </Parallax>

        <div className="impact-content">
          <Parallax
            className="impact-bg"
            offsetYMax={10}
            offsetYMin={-30}
          >
            <ImpactBG className="impact-svg" />
          </Parallax>

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
      </Page>
    );
  }
}

export default Impact;
