import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';

const App = () => (
  <BrowserRouter>
    <div className="root">
      <Route path="/" component={Landing} />
    </div>
  </BrowserRouter>
);

export default App;
