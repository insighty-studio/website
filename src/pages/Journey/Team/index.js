import React, {Component} from 'react';

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
          <Heading className="team-heading">Meat the Team</Heading>
        </div>
      </Page>
    );
  }
}

export default Team;
