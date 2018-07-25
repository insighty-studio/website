import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import {render} from 'react-dom';
import App from './app';

render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
);
