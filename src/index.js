import React from 'react';
import {render} from 'react-dom';
import {ParallaxProvider} from 'react-scroll-parallax';
import App from './app';

render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
);
