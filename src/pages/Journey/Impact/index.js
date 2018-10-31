import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Page from 'components/Page';
import {Heading, Paragraph} from 'components/typography';
import {HorizontalPadding} from 'components/layout';
import ImpactBG from 'icons/backgrounds/ImpactBG';

import './index.styl';
import './mobile/index.styl';

class Impact extends Component {
  render() {
    return (
      <Page className="impact-page">
        <div className="impact-content">
          <Parallax
            className="impact-bg"
            offsetYMax={10}
            offsetYMin={-30}
          >
            <ImpactBG className="impact-svg" />
          </Parallax>
          <HorizontalPadding>
            <Heading>Profits Paired With Purpose</Heading>
            <div className="impact-description">
              <Paragraph>
                For any commercial project that you do with us, we build a
                mobile app for an entrepreneur with a socially impactful cause.
                Pro bono.
              </Paragraph>
              <Paragraph>
                We call people that envision a better tomorrow &#39;heros&#39;. Whether
                you&#39;re a hero that can afford our services or not, we want to
                know you.
              </Paragraph>
            </div>
          </HorizontalPadding>
        </div>
      </Page>
    );
  }
}

export default Impact;
