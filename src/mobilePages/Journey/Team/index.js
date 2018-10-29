import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import FullPageScroll from 'components/interactions/FullPageScroll';

import Intro from './Sections/Intro';
import TeamMember from './Sections/TeamMember';

import './index.styl';

const teamMembers = [
  {
    picture: '/images/team-members/alex.jpg',
    name: 'Alex P.',
    title: 'Head of Client Success',
    phraseOne: '- Everyone you know has a VR headset',
    phraseTwo: '- Business trips to emerging markets in Africa are commonplace',
    phraseThree: '- Disconnecting from the level of the Web has become a universal human right',
  },
  {
    picture: '/images/team-members/ksenia.jpg',
    name: 'Ksenia G.',
    title: 'Head of Design',
    phraseOne: '- We print stuff we need on the community accessible 3d printers.',
    phraseTwo: '- Self-driving electric vehicles are our new public transit.',
    phraseThree: '- Clothing with sensors help us be healthier and live better.',
  },
  {
    picture: '/images/team-members/vadym.jpeg',
    name: 'Vadym K.',
    title: 'UX/UI Designer',
    phraseOne: '- The problems of hunger and malnutrition are solved in the least developed countries.',
    phraseTwo: '- VR is widely used for education.',
    phraseThree: '- Artificial intelligence is more advantageous and powerful than human intelligence.',
  },
  {
    picture: '/images/team-members/roma.jpeg',
    name: 'Roman K.',
    title: 'Software Engineer',
    phraseOne: 'Here are some phrases from the future:',
    phraseTwo: '- I better take an uber home because flying through the air pockets is driving me crazy.',
    phraseThree: '- Cheers from Mars and ... Good luck, Mr. Gorsky.',
  },
  {
    picture: '/images/team-members/paul.jpeg',
    name: 'Paul P.',
    title: 'Software Engineer',
    phraseOne: '- We return to the Moon.',
    phraseTwo: '- Polio is completely eradicated from our planet.',
    phraseThree: '- People learn how to consume and process news in the chaos of the digital world.',
  },
  {
    picture: '/images/team-members/denys.jpg',
    name: 'Dennis H.',
    title: 'Software Engineer',
    phraseOne: '- You don’t ever forget your keys again since they are implanted in your body.',
    phraseTwo: '- Self-driving cars mostly replaced the traditional public transit.',
    phraseThree: '- Every new house has an embedded highly personalized home assistant.',
  }
];

class MobileTeam extends Component {
  render() {
    return (
      <div className="team-page">
        <MobileHeader />
        <FullPageScroll>
          <div className="section">
            <Intro />
          </div>
          {teamMembers.map((member => (
            <div key={member.name} className="section">
              <TeamMember
                picture={member.picture}
                name={member.name}
                title={member.title}
                phraseOne={member.phraseOne}
                phraseTwo={member.phraseTwo}
                phraseThree={member.phraseThree}
              />
            </div>
          )))}
          <div className="section footer-section">
            <MobileFooter />
          </div>
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileTeam;
