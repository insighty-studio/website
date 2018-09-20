import React, {Component, Fragment} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import DeviceOrientation, {Orientation} from 'components/Orientation';
import LoaderLine from 'components/Loader/LoaderLine';
import isMobile from 'ismobilejs';
import 'normalize.css';
import 'styles/main.styl';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Intro from './pages/Intro';
import Home from './pages/Journey/Home';
import Services from './pages/Journey/Services';
import Impact from './pages/Journey/Impact';
import CaseStudies from './pages/Journey/CaseStudies';

import BetterYet from './pages/Projects/BetterYet';
import LPMA from './pages/Projects/LPMA';
import Hub from './pages/Projects/Hub';

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
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/impact" component={Impact} />
          <Route exact path="/case-studies" component={CaseStudies} />
          <Route exact path="/betteryet" component={BetterYet} />
          <Route exact path="/lpma" component={LPMA} />
          <Route exact path="/hub" component={Hub} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
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
      ready, images, progress, chunksReady
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
              overflow: 'hidden'
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
