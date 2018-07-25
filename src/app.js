import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './pages/Loader';
import Landing from './pages/Landing';
import BetterYet from './pages/BetterYet';
import LPMA from './pages/LPMA';
import LoaderLine from './pages/Loader/LoaderLine';

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
      const {progress} = this.state;

      if (this.state.chunksReady === this.state.images.length) {
        this.setState({progress: 100});
        clearInterval(interval);
        setTimeout(() => this.setState({ready: true}), transitionDuration);
      } else if (this.state.progress < 90) {
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
    if (!this.state.ready) {
      return (
        <Fragment>
          <div
            style={{
              visibility: "hidden",
              width: 0,
              height: 0,
              overflow: "hidden"
            }}
          >
            {this.state.images.map(src => (
              <img
                src={src}
                onLoad={() => this.setState({chunksReady: this.state.chunksReady + 1})}
              />
            ))}
          </div>
          <LoaderLine loading={this.state.progress} />
        </Fragment>
      );
    }

    return (
      <BrowserRouter>
        <div className="root">
          <Loader />
          {this.state.ready && this.renderRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
