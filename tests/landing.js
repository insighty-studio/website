const form = require('./helpers/form.js');

const LANDING_URL = 'http://localhost:3000/';

module.exports = {
  '@disabled': false,

  'Landing page': (client) => {
    client
      .url(LANDING_URL)
      .waitForElementVisible('.loader-page', 2000)
      .pause(3000)
      .waitForElementVisible('.bar-content .links', 2000)
      .waitForElementVisible('.links #services-link', 2000)
      .waitForElementVisible('.header', 2000)
      .waitForElementVisible('.services', 2000)
      .waitForElementVisible('.process', 2000)
      .waitForElementVisible('.clients', 2000)
      .waitForElementVisible('.partners', 2000)
      .waitForElementVisible('.contact-us', 2000)
      .waitForElementVisible('.explore-btn', 2000)
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
