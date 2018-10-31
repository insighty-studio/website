import React, {Component, Fragment} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import FreeConsultationButton from 'components/interactions/FreeConsultationButton';
import ServicesChart from 'icons/backgrounds/ServicesBG';

import './index.styl';
import './mobile/index.styl';
import {Paragraph} from 'components/typography';
import {HorizontalPadding} from 'components/layout';
import DreamDesignDevelopSection from './components/DreamDesignDevelopSection';

class Services extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <Fragment>
        <Paragraph animated>
          You draw from our expertise with tech like React
          Native, Firebase, Node.js, Mongo, Meteor, Machine Learning, VR,
          AR, as well as all kinds of payment processors and so much more.
        </Paragraph>
        <Paragraph animated>
          We are always looking to hear from people that want to change the
          world with software. We call them heroes. If you’re one of them,
          please get in touch.
        </Paragraph>
        <br />
        <FreeConsultationButton />
      </Fragment>
    );
  }

  renderExpandableBlock() {
    const {expanded} = this.state;
    if (expanded) {
      return this.renderExpanded();
    }
    return (
      <a onClick={() => this.setState({expanded: true})} className="description-more">
        See the buzzwords.
      </a>
    );
  }

  renderDescription() {
    return (
      <div className="services-description">
        <Paragraph>
          You hate software projects that drag on. We do too. If you’re like
          most people, you see software development in general as
          lingering and expensive.
        </Paragraph>
        <Paragraph>
          We help you win the day by offering an alternative plan.
        </Paragraph>
        <Paragraph>
          We adjust to demanding schedules, provide accurate granular
          estimates and meet the most stringent deadlines. That’s why we
          rigorously apply the 80/20 rule.
        </Paragraph>
        <Paragraph>
          Expect us to deliver a robust software solution that people will
          actually use.
          {' '}
        </Paragraph>
        {this.renderExpandableBlock()}
      </div>
    );
  }

  render() {
    return (
      <Page>
        <div className="services-content">
          <Parallax
            className="services-bg"
            offsetYMax={70}
            offsetYMin={-50}
            slowerScrollRate
          >
            <ServicesChart className="services-chart" />
          </Parallax>

          <HorizontalPadding>
            <Heading>Services You Deserve</Heading>
            {this.renderDescription()}
          </HorizontalPadding>
        </div>

        <DreamDesignDevelopSection />
      </Page>
    );
  }
}

export default Services;
