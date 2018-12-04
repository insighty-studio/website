import React, {Component} from 'react';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import TeamMemberCard from 'components/TeamMemberCard';
import TeamChat from 'icons/backgrounds/TeamBG';

import './index.styl';
import './mobile/index.styl';

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
            <TeamMemberCard
              name="Alex P."
              position="Head of Client Success"
              text="- Everyone you know has a VR headset
                \n- Business trips to emerging markets in Africa are commonplace
                \n- Disconnecting from the level of the Web has become a universal human right"
              src="/images/team-members/alex.jpg"
            />
            <TeamMemberCard
              name="Ksenia G."
              position="Head of Design"
              text="- We print stuff we need on the community accessible 3d printers.
                \n- Self-driving electric vehicles are our new public transit.
                \n- Clothing with sensors help us be healthier and live better."
              src="/images/team-members/ksenia.jpg"
            />
            <TeamMemberCard
              name="Vadym K."
              position="UX/UI Designer"
              text="- Cybernetic limbs for the disabled.
                \n- Electric vehicles everywhere.
                \n- Better ecology."
              src="/images/team-members/vadym.jpeg"
            />
          </div>
          <div className="card-row">
            <TeamMemberCard
              name="Lidia K."
              position="Sales Representative"
              text="- Hunger and malnutrition are defeated even in the least developed countries.
                \n- VR is widely used for education.
                \n- Artificial intelligence is more advantageous and powerful than human intelligence."
              src="/images/team-members/lida.jpeg"
            />
            <TeamMemberCard
              name="Roman K."
              position="Software Engineer"
              text="Here are some phrases from the future:
              \n- I'd better take an uber home because flying through the air pockets is driving me crazy.
              \n- Cheers from Mars and ... Good luck, Mr. Gorsky."
              src="/images/team-members/roma.jpeg"
            />
            <TeamMemberCard
              name="Paul P."
              position="Software Engineer"
              text="- We return to the Moon.
                \n- Polio is completely eradicated from our planet.
                \n- People learn how to consume and process news in the chaos of the digital world."
              src="/images/team-members/paul.jpeg"
            />
          </div>
          <div className={classnames('card-row', 'last-row')}>
            <TeamMemberCard
              name="Denis H."
              position="Software Engineer"
              text="- You don’t ever forget your keys again since they are implanted in your body.
                \n- Self-driving cars mostly replaced the traditional public transit.
                \n- Every new house has an embedded highly personalized home assistant."
              src="/images/team-members/denys.jpg"
            />
          </div>
        </div>
      </Page>
    );
  }
}

export default Team;
