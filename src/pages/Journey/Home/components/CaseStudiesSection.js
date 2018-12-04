import React from 'react';
import AnimatedButton from 'components/interactions/AnimatedButton';
import Heading from 'components/typography/Heading';
import {AppleIcon, RightArrowIcon} from 'icons';
import IphoneMobileMock from 'icons/IphoneMobileMock';
import {trackEvent} from 'analytics';

export default class CaseStudiesSection extends React.Component {
  onClickAppStore() {
    trackEvent('BetterYet App Store Link Clicked');
  }

  render() {
    return (
      <div className="home-case-studies">
        <Heading className="case-studies-heading">Our Work</Heading>

        <div className="screens-container-mobile">
          <div className="screens-scroll">
            <div className="img-wrapper">
              <img alt="phone screenshot" src="/images/screens/BY/MBYScreen1.png" />
            </div>
            <div className="img-wrapper second">
              <img alt="phone screenshot" src="/images/screens/BY/MBYScreen2.png" />
            </div>
            <div className="img-wrapper third">
              <img alt="phone screenshot" src="/images/screens/BY/MBYScreen3.png" />
            </div>
          </div>
          <IphoneMobileMock />
        </div>

        <div className="case-studies-bg">
          <div className="case-studies-description">
            <p className="case-studies-title">BetterYet</p>
            <p className="case-studies-subtitle">Loyalty for Small Businesses</p>
            <div className="case-studies-separator" />
            <p className="case-studies-text">
              Mark and Alan, the co-founders of BetterYet, envisioned a
              future where all businesses can set up a loyalty program
              in 30 seconds.
              <br />
              The problem was that they didn’t have the know-how to
              turn it into reality. We started from clean slate with the
              product that now enjoys a growing user base.
            </p>
          </div>

          <div className="animated-button-container">
            <AnimatedButton
              title="See More"
              className="animated-button"
              href="/betteryet"
            >
              <RightArrowIcon color="white" />
            </AnimatedButton>

            <AnimatedButton
              opensNewTab
              onClick={() => this.onClickAppStore()}
              title="App Store"
              className="animated-button"
              href="https://itunes.apple.com/us/app/betteryet-local-cash-rewards/id1408033686"
            >
              <AppleIcon />
            </AnimatedButton>
          </div>

          <div className="screens-container">
            <img alt="phone screenshot" className="phone-image" src="/images/screens/BY/BYScreen1.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen2.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen3.png" />
          </div>
        </div>
      </div>
    );
  }
}
