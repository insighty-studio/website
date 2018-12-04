import React from 'react';
import Heading from 'components/typography/Heading';
import CaseStudy from 'components/Sections/CaseStudy';
import {HorizontalPadding} from 'components/layout';
import './index.styl';

export default class CaseStudiesSection extends React.Component {
  render() {
    return (
      <div className="home-case-studies">
        <HorizontalPadding>
          <Heading>Our Work</Heading>
        </HorizontalPadding>
        <CaseStudy
          hasMobileThumbnails
          title="BetterYet"
          subtitle="Loyalty for Small Businesses"
          text={`Mark and Alan, the co-founders of BetterYet,
              envisioned a future where all businesses can set up a
              loyalty program in 30 seconds.
              \\nThe problem was that they didn’t have the know-how to
              turn it into reality. We started from clean slate with the
              product that now enjoys a growing user base.`}
          href="/our-work"
          images={[
            '/images/screens/BY/BYScreen1.png',
            '/images/screens/BY/BYScreen2.png',
            '/images/screens/BY/BYScreen3.png',
          ]}
          mobileImages={[
            '/images/screens/BY/MBYScreen1.png',
            '/images/screens/BY/MBYScreen2.png',
            '/images/screens/BY/MBYScreen3.png',
          ]}
          mockColor="white"
        />
      </div>
    );
  }
}
