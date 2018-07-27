import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoaderLine from 'components/Loader/LoaderLine';
import 'normalize.css';
import 'styles/main.styl';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Landing from './pages/Landing';
import BetterYet from './pages/BetterYet';
import LPMA from './pages/LPMA';

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
    return (
      <BrowserRouter>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/betteryet" component={BetterYet} />
            <Route path="/lpma" component={LPMA} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  render() {
    const {
      ready, images, progress, chunksReady
    } = this.state;

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
      <BrowserRouter>
        <div className="root">
          {ready && this.renderRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
