import React, {Component, Fragment} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import ScrollToTop from 'components/ScrollToTop';
import DeviceOrientation, {Orientation} from 'components/Orientation';
import LoaderLine from 'components/Loader/LoaderLine';
import Header from 'components/Header';
import isMobile from 'ismobilejs';
import 'normalize.css';
import 'styles/main.styl';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Intro from './pages/Intro';
import Home from './pages/Journey/Home';
import MobileHome from './mobilePages/Journey/Home';
import Services from './pages/Journey/Services';
import MobileServices from './mobilePages/Journey/Services';
import Impact from './pages/Journey/Impact';
import MobileImpact from './mobilePages/Journey/Impact';
import CaseStudies from './pages/Journey/CaseStudies';
import MobileCaseStudies from './mobilePages/Journey/CaseStudies';
import Team from './pages/Journey/Team';
import MobileTeam from './mobilePages/Journey/Team';
import Consultation from './pages/Journey/Consultation';
import MobileConsultation from './mobilePages/Journey/Consultation';

import BetterYet from './pages/Projects/BetterYet';
import LPMA from './pages/Projects/LPMA';
import Hub from './pages/Projects/Hub';
import CommuniHelp from './pages/Projects/CommuniHelp';
import Booqed from './pages/Projects/Booqed';

import Landscape from './pages/Landscape';

import './index.styl';

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  offset: 40,
  delay: 0,
  duration: 800,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top'
});

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      progress: 0,
      chunksReady: 0,
      images: [
        '/images/person@2x.png',
        '/images/plant@2x.png',
        '/images/program@2x.png',
        '/images/message@2x.png',
        '/images/laptop@2x.png',
        '/images/main-art-mobile@2x.png',
      ]
    };
  }

  componentDidMount() {
    const transitionDuration = 800;

    const interval = setInterval(() => {
      const {progress, chunksReady, images} = this.state;

      if (chunksReady === images.length) {
        this.setState({progress: 100});
        clearInterval(interval);
        setTimeout(() => this.setState({ready: true}), transitionDuration);
      } else if (progress < 90) {
        this.setState({progress: progress < 25 ? 25 : progress + 7});
      }
    }, transitionDuration);
  }

  renderRoutes() {
    const {ready} = this.state;

    if (!ready) return null;

    return (
      <BrowserRouter>
        <Route render={({location}) => (
          <Fragment>
            {(location.pathname !== '/'
              && location.pathname !== '/betteryet'
              && location.pathname !== '/lpma'
              && location.pathname !== '/hub'
              && location.pathname !== '/communihelp'
              && location.pathname !== '/booqed'
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
                    <Route exact path="/communihelp" component={CommuniHelp} />
                    <Route exact path="/booqed" component={Booqed} />
                    <Route path="*" render={() => <Redirect to="/" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </ScrollToTop>
          </Fragment>
        )}
        />
      </BrowserRouter>
    );
  }

  renderMobile() {
    return (
      <Fragment>
        <DeviceOrientation lockOrientation="landscape">
          <Orientation orientation="landscape" alwaysRender={false}>
            <Landscape />
          </Orientation>
          <Orientation orientation="portrait" alwaysRender={false}>
            {this.renderRoutes()}
          </Orientation>
        </DeviceOrientation>
      </Fragment>
    );
  }

  render() {
    const {
      ready, images, progress, chunksReady,
    } = this.state;
    const isPhone = isMobile.apple.phone;

    if (!ready) {
      return (
        <Fragment>
          <div
            style={{
              visibility: 'hidden',
              width: 0,
              height: 0,
              overflow: 'hidden',
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                alt=""
                src={src}
                onLoad={() => this.setState({chunksReady: chunksReady + 1})}
              />
            ))}
          </div>
          <LoaderLine loading={progress} />
        </Fragment>
      );
    }

    return (
      <div className="app">
        {isPhone ? this.renderMobile() : this.renderRoutes()}
      </div>
    );
  }
}

export default App;
