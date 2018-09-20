import React, {Component, Fragment} from 'react';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import Button from 'components/interactions/Button';
import {FeatherPen, Compass, BrowserWindows} from 'icons';
import ServicesChart from 'icons/backgrounds/ServicesBG';

import './index.styl';


class Services extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <Fragment>
        <span>
          {' '}
          You draw from our expertise with tech like React
          Native, Firebase, Node.js, Mongo, Meteor, Machine Learning, VR,
          AR, as well as all kinds of payment processors and so much more.
        </span>
      </Fragment>
    );
  }

  render() {
    const {expanded} = this.state;

    return (
      <Page className="services-page">
        <div className="services-bg">
          <ServicesChart className="services-chart" />
        </div>

        <div className="services-content">
          <Heading className="services-heading">Services You Deserve</Heading>

          <div className={classnames('services-description', expanded && 'expanded')}>
            <p className="services-description-text">
              You hate software projects that drag on. We do too. If you’re like
              most people, you see software development in general as
              lingering and expensive.
              <br />
              We help you win the day by offering an alternative plan.
            </p>
            <p className="services-description-text">
              We adjust to demanding schedules, provide accurate granular
              estimates and meet the most stringent deadlines. That’s why we
              rigorously apply the 80/20 rule.
            </p>
            <p className="services-description-text">
              Expect us to deliver a robust software solution that people will
              actually use.
              {!expanded ? (
                <span onClick={() => this.setState({expanded: true})} className="description-more">
                  {' '}
                    See the buzzwords.
                </span>
              )
                : this.renderExpanded()}
            </p>
            <p className="services-description-text">
              We are always looking to hear from people that want to change the
              world with software. We call them heroes. If you’re one of them,
              please get in touch.
            </p>

            <Button className="services-button">FREE CONSULTATION</Button>
          </div>

        </div>

        <div className="services-dream-section">
          <Heading className="services-dream-heading">Dream, Design, Develop</Heading>

          <div className="services-dream-blocks">
            <div className="service-block">
              <FeatherPen />
              <h3 className="service-block-heading">Branding</h3>
              <p className="service-block-description">
                The brand lives and evolves in the
                minds of people. We build brands
                for companies that are changing
                how the world works.
              </p>
            </div>
            <div className="service-block">
              <Compass />
              <h3 className="service-block-heading">Design</h3>
              <p className="service-block-description">
                We design applications that
                intuitively meet the needs of your
                customers and, in turn keep
                them sticking around for good.
              </p>
            </div>
            <div className="service-block">
              <BrowserWindows />
              <h3 className="service-block-heading">Development</h3>
              <p className="service-block-description">
                With over a decade of experience
                our team creates flawless
                applications that work exactly as
                you had envisioned.
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Services;
