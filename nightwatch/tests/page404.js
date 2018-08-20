const PAGE404_URL = 'http://localhost:3000/page404';

module.exports = {
  '@disabled': false,

  'Page 404': (client) => {
    client
      .url(PAGE404_URL)
      .waitForElementVisible('.loader-page')
      .pause(3000)
      .waitForElementVisible('.page-404')
      .waitForElementVisible('a.home-button')
      .click('a[href="/"]')
      .useXpath()
      .waitForElementVisible('(//div[@class="landing"])[1]')
      .useCss()
      .url(PAGE404_URL);
  },

  after: (browser) => {
    browser.end();
  },
};
