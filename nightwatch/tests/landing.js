const form = require('./helpers/form.js');

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
      .waitForElementVisible('.services')
      .waitForElementVisible('.process')
      .waitForElementVisible('.clients')
      .waitForElementVisible('.partners')
      .waitForElementVisible('.contact-us')
      .waitForElementVisible('.explore-btn')
      .click('#home-link')
      .click('#services-link')
      .click('#process-link')
      .click('#clients-link')
      .click('#contact-link')
      .pause(1000)
      .click('.scroll-up-btn');
  },

  'Form on Landing page': form.sendForm,

  after: (browser) => {
    browser.end();
  },
};
