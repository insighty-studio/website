import React, {Component} from 'react';

import Page from 'components/Page';
import CaseStudy from 'components/Sections/CaseStudy';
import Heading from 'components/typography/Heading';

import './index.styl';

class CaseStudies extends Component {
  render() {
    return (
      <Page className="case-studies-page">

        <Heading className="case-studies-heading">Select Case Studies</Heading>


        <div className="case-studies-content">
          <CaseStudy
            title="BetterYet"
            subtitle="Loyalty for Small Businesses"
            text={`Mark and Alan, the co-founders of BetterYet,
              envisioned a future where all businesses can set up a
              loyalty program in 30 seconds.
              \\nThe problem was that they didn’t have the know-how to
              turn it into reality. We started from clean slate with the
              product that now enjoys a growing user base.`}
            href="/betteryet"
            images={[
              '/images/screens/BY/BYScreen1.png',
              '/images/screens/BY/BYScreen2.png',
              '/images/screens/BY/BYScreen3.png',
            ]}
          />
          <CaseStudy
            title="HUB 4.0"
            subtitle="Community App"
            text={`Mark and Alan, the co-founders of BetterYet,
              envisioned a future where all businesses can set up a
              loyalty program in 30 seconds.
              \\nThe problem was that they didn’t have the know-how to
              turn it into reality. We started from clean slate with the
              product that now enjoys a growing user base.`}
            href="/hub"
            images={[
              '/images/screens/HUB/HubScreen1.png',
              '/images/screens/HUB/HubScreen2.png',
              '/images/screens/HUB/HubScreen3.png',
            ]}
          />
        </div>
      </Page>
    );
  }
}

export default CaseStudies;
