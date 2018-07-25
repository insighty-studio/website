import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './pages/Loader';
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
            <Route path="/lpma" component={LPMA} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  render() {
    const {ready} = this.state;
    return (
      <BrowserRouter>
        <div className="root">
          <Loader />
          {ready && this.renderRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
