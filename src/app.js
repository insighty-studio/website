import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';
import Loader from './pages/Loader';
import BetterYet from './pages/BetterYet';
import SuperHero from './pages/SuperHero';
import LPMA from './pages/LPMA';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ready: true}), 2000);
  }

  renderRoutes() {
    return (
      <BrowserRouter>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/betteryet" component={BetterYet} />
            <Route path="/superhero" component={SuperHero} />
            <Route path="/lpma" component={LPMA} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  render() {
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
