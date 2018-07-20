import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';
import Loader from './pages/Loader';
import BetterYet from './pages/BetterYet';
import SuperHero from './pages/SuperHero';
import CET from './pages/CET';
import LPMA from './pages/LPMA';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

AOS.init({
  // Global settings
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animated
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

  // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animated should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the
  // element regarding to window should trigger the animated
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

  render() {
    if (!this.state.ready) return <Loader />;

    return (
      <BrowserRouter>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/betteryet" component={BetterYet} />
            <Route path="/superhero" component={SuperHero} />
            <Route path="/cet" component={CET} />
            <Route path="/lpma" component={LPMA} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
