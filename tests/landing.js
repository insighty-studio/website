const LANDING_URL = 'http://localhost:3000/';

module.exports = {
  'Landing Page': (client) => {
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
      .click('.explore-btn')
      .click('#services-link')
      .click('#process-link')
      .click('#clients-link')
      .click('#contact-link')
      .pause(1000)
      .click('.scroll-up-btn')
      .setValue('input[name=name]', 'nightwatch test')
      .setValue('input[name=email]', 'nightwatch@test.com')
      .setValue('input[name=phone]', '+000000000')
      .setValue('input[name=website]', 'nightwatch.com')
      .setValue('textarea[name=message]', 'Don\'t worry, it\'s just a test.')
      .assert.containsText('.form-btn .button-hover-text', 'SEND')
      .click('.form-btn')
      .waitForElementVisible('.notification-success', 2000)
      .assert.containsText('.form-btn .button-hover-text', 'THANKS!')
      .end();
  }
};
