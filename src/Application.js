import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import isMobile from 'ismobilejs';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './imports/components/Header';
import ScrollToTop from './imports/components/ScrollToTop';
import Intro from './pages/Intro';
import MobileHome from './mobilePages/Journey/Home';
import Home from './pages/Journey/Home';
import MobileServices from './mobilePages/Journey/Services';
import Services from './pages/Journey/Services';
import MobileImpact from './mobilePages/Journey/Impact';
import Impact from './pages/Journey/Impact';
import MobileCaseStudies from './mobilePages/Journey/CaseStudies';
import CaseStudies from './pages/Journey/CaseStudies';
import MobileTeam from './mobilePages/Journey/Team';
import Team from './pages/Journey/Team';
import MobileConsultation from './mobilePages/Journey/Consultation';
import Consultation from './pages/Journey/Consultation';
import BetterYet from './pages/Projects/BetterYet';
import LPMA from './pages/Projects/LPMA';
import Hub from './pages/Projects/Hub';
import {trackPage} from './imports/analytics';

export default class Application extends React.Component {
  componentDidUpdate(prevProps) {
    const {location: {prevPathname}} = prevProps;
    const {location} = this.props;
    const {pathname} = location;
    if (prevPathname !== pathname) {
      trackPage(pathname);
    }
  }

  render() {
    const {location} = this.props;
    return (
      <Fragment>
        {(location.pathname !== '/'
          && location.pathname !== '/betteryet'
          && location.pathname !== '/lpma'
          && location.pathname !== '/hub'
          && ((isMobile.phone && location.pathname !== '/home')
            || (!isMobile.phone))
          && ((isMobile.phone && location.pathname !== '/services')
            || (!isMobile.phone))
          && ((isMobile.phone && location.pathname !== '/our-work')
            || (!isMobile.phone))
          && ((isMobile.phone && location.pathname !== '/team')
            || (!isMobile.phone))
          && ((isMobile.phone && location.pathname !== '/consult')
            || (!isMobile.phone))
          && ((isMobile.phone && location.pathname !== '/impact')
            || (!isMobile.phone))) && <Header />}
        <ScrollToTop>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={450}>
              <Switch location={location}>
                <Route exact path="/" component={Intro} />
                <Route exact path="/home" component={isMobile.phone ? MobileHome : Home} />
                <Route exact path="/services" component={isMobile.phone ? MobileServices : Services} />
                <Route exact path="/impact" component={isMobile.phone ? MobileImpact : Impact} />
                <Route exact path="/our-work" component={isMobile.phone ? MobileCaseStudies : CaseStudies} />
                <Route exact path="/team" component={isMobile.phone ? MobileTeam : Team} />
                <Route exact path="/consult" component={isMobile.phone ? MobileConsultation : Consultation} />
                <Route exact path="/betteryet" component={BetterYet} />
                <Route exact path="/lpma" component={LPMA} />
                <Route exact path="/hub" component={Hub} />
                <Route path="*" render={() => <Redirect to="/" />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
      </Fragment>
    );
  }
}

Application.propTypes = {
  location: PropTypes.object.isRequired,
};
