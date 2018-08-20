const form = require('./helpers/form.js');

const LPMA_URL = 'http://localhost:3000/lpma';

module.exports = {
  '@disabled': true,

  'LPMA Page': (client) => {
    client
      .url(LPMA_URL)
      .waitForElementVisible('.loader-page')
      .pause(3000)
      .waitForElementVisible('.bar-content .links')
      .waitForElementVisible('.links #home-link')
      .waitForElementVisible('.links #contact-link')
      .waitForElementVisible('.header-section')
      .waitForElementVisible('.about-section')
      .waitForElementVisible('.illustrations-section')
      .waitForElementVisible('.logo-section')
      .waitForElementVisible('.colors-section')
      .waitForElementVisible('.screens-section')
      .waitForElementVisible('.clutch-section')
      .waitForElementVisible('.next-project-section')
      .waitForElementVisible('.contact-us-form')
      .waitForElementVisible('.client-footer')
      // TODO: Add footer
      .click('#home-link')
      .useXpath()
      .waitForElementVisible('(//div[@class="landing"])[1]')
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
