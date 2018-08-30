const form = require('./helpers/form.js');

const BETTERYET_URL = 'http://localhost:3000/betteryet';

module.exports = {
  '@disabled': false,

  'BetterYet Page': (client) => {
    client
      .url(BETTERYET_URL)
      .waitForElementVisible('.loader-page')
      .pause(3000)
      .waitForElementVisible('.betteryet-page', 3000)
      .waitForElementVisible('.bar-content .links')
      .waitForElementVisible('.links #home-link')
      .waitForElementVisible('.links #contact-link')
      .waitForElementVisible('.header-section')
      .waitForElementVisible('.about-section')
      .useXpath()
      .waitForElementVisible('(//div[@class="prototypes-section"])[1]')
      .waitForElementVisible('(//div[@class="prototypes-section"])[2]')
      .useCss()
      .waitForElementVisible('.logo-section')
      .waitForElementVisible('.colors-section')
      .waitForElementVisible('.illustration-section')
      .waitForElementVisible('.clutch-section')
      .waitForElementVisible('.next-project-section')
      .waitForElementVisible('.contact-us-form')
      .waitForElementVisible('.client-footer')
      // TODO: Add footer
      .click('#home-link')
      .useXpath()
      .waitForElementVisible('(//div[@class="landing"])[1]')
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
