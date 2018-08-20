const form = require('./helpers/form.js');
const slider = require('./helpers/client-slider.js');

const LANDING_URL = 'http://localhost:3000/';

module.exports = {
  '@disabled': false,

  'Landing page': (client) => {
    client
      .url(LANDING_URL)
      .waitForElementVisible('.loader-page')
      .pause(3000)
      .waitForElementVisible('.bar-content .links')
      .waitForElementVisible('.links #services-link')
      .waitForElementVisible('.header')
      .waitForElementVisible('.partners')
      .waitForElementVisible('.explore-btn')
      .click('#home-link')
      .click('#services-link')
      .waitForElementPresent('.services')
      .click('#process-link')
      .waitForElementPresent('.process')
      .click('#contact-link')
      .waitForElementPresent('.contact-us')
      .click('.scroll-up-btn');
  },

  'Clients Slider on Landing page': slider.clientSlider,

  'Form on Landing page': form.sendForm,

  after: (browser) => {
    browser.end();
  },
};
