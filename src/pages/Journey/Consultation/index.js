import React, {Component} from 'react';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import ConsultUs from 'icons/backgrounds/ConsultBG';

import './index.styl';

class Consultation extends Component {
  render() {
    return (
      <Page className="consult-page">
        <div className="consult-bg">
          <ConsultUs className="consult-illustration" />
        </div>

        <div className="consult-content">
          <Heading className="consult-heading">Fancy A Free 30-Minute Product Development Session?</Heading>
          <p className="consult-para">Here’s the plan:</p>
          <p className="consult-para">- We learn as much as we can about your idea.</p>
          <p className="consult-para">- We outline the community of people that you want to reach with your product.</p>
          <p className="consult-para">- You get your idea visualized via mockups a couple of days after.</p>
        </div>
      </Page>
    );
  }
}

export default Consultation;
