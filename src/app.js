import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';
import Loader from './pages/Loader';

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
    if(!this.state.ready) return <Loader />;

    return (
      <BrowserRouter>
        <div className="root">
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
