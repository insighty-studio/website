const form = require('./helpers/form.js');

const BETTERYET_URL = 'http://localhost:3000/betteryet';

module.exports = {
  '@disabled': true,

  'BetterYet Page': (client) => {
    client
      .url(BETTERYET_URL)
      .waitForElementVisible('.loader-page', 2000)
      .pause(3000)
      .waitForElementVisible('.betteryet-page', 3000)
      .waitForElementVisible('.bar-content .links', 2000)
      .waitForElementVisible('.links #home-link', 2000)
      .waitForElementVisible('.links #contact-link', 2000)
      .waitForElementVisible('.header-section', 2000)
      .waitForElementVisible('.about-section', 2000)
      .useXpath()
      .waitForElementVisible('(//div[@class="prototypes-section"])[1]', 2000)
      .waitForElementVisible('(//div[@class="prototypes-section"])[2]', 2000)
      .useCss()
      .waitForElementVisible('.logo-section', 2000)
      .waitForElementVisible('.colors-section', 2000)
      .waitForElementVisible('.illustration-section', 2000)
      .waitForElementVisible('.clutch-section', 2000)
      .waitForElementVisible('.next-project-section', 2000)
      .waitForElementVisible('.contact-us-form', 2000)
      .waitForElementVisible('.client-footer', 2000)
      // TODO: Add footer
      .click('#home-link')
      .useXpath()
      .waitForElementVisible('(//div[@class="landing"])[1]', 2000)
      .useCss()
      .url(BETTERYET_URL)
      .pause(3000)
      .click('#contact-link');
  },

  'Form on BetterYet page': form.sendForm,

  after: (browser) => {
    browser.end();
  },
};
