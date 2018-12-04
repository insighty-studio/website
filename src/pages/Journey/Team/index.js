import React, {Component} from 'react';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import TeamMemberCard from 'components/TeamMemberCard';
import TeamChat from 'icons/backgrounds/TeamBG';
import {HorizontalPadding} from 'components/layout';
import {Paragraph, SmallHeading} from 'components/typography';

import './index.styl';
import './mobile/index.styl';

const teamMembers = [
  {
    name: 'Alex P.',
    position: 'Head of Client Success',
    answers: [
      '- Everyone you know has a VR headset',
      '- Business trips to emerging markets in Africa are commonplace',
      '- Disconnecting from the level of the Web has become a universal human right'
    ],
    image: '/images/team-members/alex.jpg'
  },
  {
    name: 'Ksenia G.',
    position: 'Head of Design',
    answers: ['- We print stuff we need on the community accessible 3d printers.',
      '- Self-driving electric vehicles are our new public transit.',
      '- Clothing with sensors help us be healthier and live better.'],
    image: '/images/team-members/ksenia.jpg'
  },
  {
    name: 'Dmitry Y.',
    position: 'Head of Engineering',
    answers: ['- Online learning is the dominant form of professional education in most fields.',
      '- Most urban commuters prefer electric transport like e-bikes and e-scooters.',
      '- Supervised robotic surgeries have emerged.'],
    image: '/images/team-members/dmitry.jpeg'
  },
  {
    name: 'Lidia K.',
    position: 'Sales Representative',
    answers: ['- Hunger and malnutrition are defeated even in the least developed countries.',
      '- VR is widely used for education.',
      '- Artificial intelligence is more advantageous and powerful than human intelligence.'],
    image: '/images/team-members/lida.jpeg'
  },
  {
    name: 'Roman K.',
    position: 'Software Engineer',
    answers: ['Here are some phrases from the future:',
      "- I'd better take an uber home because flying through the air pockets is driving me crazy.",
      '- Cheers from Mars and ... Good luck, Mr. Gorsky.'],
    image: '/images/team-members/roma.jpeg'
  },
  {
    name: 'Vadym K.',
    position: 'UX/UI Designer',
    answers: ['- Cybernetic limbs for the disabled.',
      '- Electric vehicles everywhere.',
      '- Better ecology.'],
    image: '/images/team-members/vadym.jpeg'
  },
  {
    name: 'Paul P.',
    position: 'Software Engineer',
    answers: ['- We return to the Moon.',
      '- Polio is completely eradicated from our planet.',
      '- People learn how to consume and process news in the chaos of the digital world.'],
    image: '/images/team-members/paul.jpeg'
  },
  {
    name: 'Denis H.',
    position: 'Software Engineer',
    answers: ['- You don’t ever forget your keys again since they are implanted in your body.',
      '- Self-driving cars mostly replaced the traditional public transit.',
      '- Every new house has an embedded highly personalized home assistant.'],
    image: '/images/team-members/denys.jpg'
  },
];

class Team extends Component {
  renderCards() {
    return (
      <div className="team-members-cards">
        <div className="card-row">
          {teamMembers.map(teamMember => <TeamMemberCard {...teamMember} />)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Page className="team-page">
        <div className="team-bg">
          <TeamChat className="team-chat" />
        </div>

        <HorizontalPadding>
          <div className="team-content">
            <Heading>Meet the Team</Heading>
            <Paragraph>
              These are the people behind Insighty. We asked everyone one question:
            </Paragraph>
            <SmallHeading>
              “How do you see technology impact our planet over the next 7 years?”
            </SmallHeading>
            <Paragraph>
              Here are the answers.
            </Paragraph>
          </div>
          {this.renderCards()}
        </HorizontalPadding>
      </Page>
    );
  }
}

export default Team;
