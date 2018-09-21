import React, {Component} from 'react';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import TeamChat from 'icons/backgrounds/TeamBG';

import './index.styl';

import design from './Team.png';

class Team extends Component {
  render() {
    return (
      <Page className="team-page">
        <div className="team-bg">
          <TeamChat className="team-chat" />
        </div>

        <img src={design} alt="" className="design" />

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
        </div>
      </Page>
    );
  }
}

export default Team;
