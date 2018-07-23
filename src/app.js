import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';
import Loader from './pages/Loader';
import BetterYet from './pages/BetterYet';
import LPMA from './pages/LPMA';
import LoaderLine from './pages/Loader/LoaderLine';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      ready: 0,
      images: [
        require('./pages/Landing/sections/Header/images/person@2x.png'),
        require('./pages/Landing/sections/Header/images/plant@2x.png'),
        require('./pages/Landing/sections/Header/images/program@2x.png'),
        require('./pages/Landing/sections/Header/images/message@2x.png'),
        require('./pages/Landing/sections/Header/images/laptop@2x.png'),
      ]
    };
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
    if (this.state.ready < this.state.images.length) {
      return (
        <div>
          {this.state.images.map(src => (
            <img
              src={src}
              style={{display: 'none'}}
              onLoad={() => this.setState({ready: this.state.ready + 1})}
            />
          ))}
          <LoaderLine loading={(this.state.ready + 1) / this.state.images.length * 100} />
        </div>
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
