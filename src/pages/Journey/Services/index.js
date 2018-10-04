import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import Button from 'components/interactions/Button';
import {FeatherPen, Compass, BrowserWindows} from 'icons';
import ServicesChart from 'icons/backgrounds/ServicesBG';
import ServicesManMobile from 'icons/backgrounds/ServicesMobileBG';

import './index.styl';
import './mobile/index.styl';

class Services extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <Fragment>
        <span className="services-description-text">
          You draw from our expertise with tech like React
          Native, Firebase, Node.js, Mongo, Meteor, Machine Learning, VR,
          AR, as well as all kinds of payment processors and so much more.
        </span>
        <p className="services-description-text">
          We are always looking to hear from people that want to change the
          world with software. We call them heroes. If you’re one of them,
          please get in touch.
        </p>
        <Link className="header-link" to="consult">
          <Button className="services-button">FREE CONSULTATION</Button>
        </Link>
      </Fragment>
    );
  }

  render() {
    const {expanded} = this.state;

    return (
      <Page className="services-page">
        <div className="services-content">
          <Parallax
            className="services-bg"
            offsetYMax={70}
            offsetYMin={-50}
            slowerScrollRate
          >
            <ServicesChart className="services-chart" />
          </Parallax>

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
            <span className="services-description-text">
              Expect us to deliver a robust software solution that people will
              actually use.
              {' '}
            </span>
            {!expanded ? (
              <span onClick={() => this.setState({expanded: true})} className="description-more">
                See the buzzwords.
              </span>
            )
              : this.renderExpanded()}
          </div>

        </div>

        <div className="services-content-mobile">
          <div className="services-bg">
            <ServicesManMobile />
          </div>

          <Heading className="services-heading">See The Buzzwords</Heading>
          <div className="services-description">
            <p className="services-description-text">
              We adjust to demanding schedules, provide accurate granular
              estimates and meet the most stringent deadlines. That’s why we
              rigorously apply the 80/20 rule.
            </p>
            <p className="services-description-text">
              You draw from our expertise with tech like
              {' '}
              <b>
                React Native, Firebase, Node.js, Mongo, Meteor, Machine Learning, VR, AR
              </b>
              , as well as all kinds of payment processors and so much more.
            </p>
          </div>
        </div>

        <div className="services-dream-section">
          <Heading className="services-dream-heading">Dream, Design, Develop</Heading>
          <p className="services-dream-text-mobile">
            We are always looking to hear from people that want to change the world with software.
            We call them heroes. If you’re one of them, please get in touch.
          </p>
          <div className="services-dream-blocks">
            <div className="service-blocks-wrapper">
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
        </div>
      </Page>
    );
  }
}

export default Services;
