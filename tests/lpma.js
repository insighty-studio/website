const form = require('./helpers/form.js');

const LPMA_URL = 'http://localhost:3000/lpma';

module.exports = {
  '@disabled': true,

  'LPMA Page': (client) => {
    client
      .url(LPMA_URL)
      .waitForElementVisible('.loader-page', 2000)
      .pause(3000)
      .waitForElementVisible('.bar-content .links', 2000)
      .waitForElementVisible('.links #home-link', 2000)
      .waitForElementVisible('.links #contact-link', 2000)
      .waitForElementVisible('.header-section', 2000)
      .waitForElementVisible('.about-section', 2000)
      .waitForElementVisible('.illustrations-section', 2000)
      .waitForElementVisible('.logo-section', 2000)
      .waitForElementVisible('.colors-section', 2000)
      .waitForElementVisible('.screens-section', 2000)
      .waitForElementVisible('.clutch-section', 2000)
      .waitForElementVisible('.next-project-section', 2000)
      .waitForElementVisible('.contact-us-form', 2000)
      .waitForElementVisible('.client-footer', 2000)
      // TODO: Add footer
      .click('#home-link')
      .useXpath()
      .waitForElementVisible('(//div[@class="landing"])[1]', 2000)
      .useCss()
      .url(LPMA_URL)
      .pause(3000)
      .click('#contact-link');
  },

  'Form on LPMA page': form.sendForm,

  after: (browser) => {
    browser.end();
  },
};
