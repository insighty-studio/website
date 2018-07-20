import React from 'react';
import {render} from 'react-dom';
import App from './app';
import {ParallaxProvider} from 'react-scroll-parallax';

render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
);
