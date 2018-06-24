import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';

const App = () => (
  <BrowserRouter>
    <div className="root">
      <Route path="/" component={Landing} />
    </div>
  </BrowserRouter>
);

export default App;
