import React, {Component} from 'react';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import TeamChat from 'icons/backgrounds/TeamBG';

import './index.styl';

class Team extends Component {
  render() {
    return (
      <Page className="team-page">
        <div className="team-bg">
          <TeamChat className="team-chat" />
        </div>

        <div className="team-content">
          <Heading className="team-heading">Meet the Team</Heading>
          <p className="team-description-text">
            These are the people behind Insighty. Here is everyone practicing envisioning the future.
          </p>
          <p className={classnames('team-description-text', 'bold')}>
            “How do you see technology impact our planet over the next 7 years?”
          </p>
        </div>

        <div className="team-members-cards">
          <div className="card-row">
            <div className="team-member">
              <div className="member-photo" />
              <div className="member-content">
                <h3 className="member-name">Alex P.</h3>
                <p className="member-position">Head of Client Success</p>
                <div className="member-separator" />
                <div className="member-text">
                  <p className="member-para">
                  - Everyone you know has a VR headset
                  </p>
                  <p className="member-para">
                  - Business trips to emerging markets in Africa are commonplace
                  </p>
                  <p className="member-para">
                  - Disconnecting from the level of the Web has become a universal human right
                  </p>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo" />
              <div className="member-content">
                <h3 className="member-name">Ksenia G.</h3>
                <p className="member-position">Head of Design</p>
                <div className="member-separator" />
                <div className="member-text">
                  <p className="member-para">
                    - We print stuff we need on the community accessible 3d printers.
                  </p>
                  <p className="member-para">
                    - Self-driving electric vehicles are our new public transit.
                  </p>
                  <p className="member-para">
                    - Clothing with sensors help us be healthier and live better.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo" />
              <div className="member-content">
                <h3 className="member-name">Dmitry Y.</h3>
                <p className="member-position">Head of Engineering</p>
                <div className="member-separator" />
                <div className="member-text">
                  <p className="member-para">
                    - Online learning is the dominant form of professional education in most fields.
                  </p>
                  <p className="member-para">
                    - Most urban commuters prefer electric transport like e-bikes and e-scooters.
                  </p>
                  <p className="member-para">
                    - Supervised robotic surgeries have emerged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Team;
