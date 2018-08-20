const LANDING_URL = 'http://localhost:3000/';

exports.clientSlider = (client) => {
  client
    .click('#clients-link')
    .pause(1000)
    .waitForElementPresent('.clients')
    .waitForElementPresent('.right-arrow')
    .waitForElementPresent('.left-arrow')
    .getText('.client-overview .name', (res) => {
      client.expect.element('.client-overview .name').text.to.contain(res.value);
      client.click('.right-arrow');
      client.pause(2000);
      client.expect.element('.client-overview .name').text.to.not.contain(res.value);
      client.click('.left-arrow');
      client.pause(2000);
      client.expect.element('.client-overview .name').text.to.contain(res.value);
    })
    .click('.full-review-btn')
    .pause(1000)
    .windowHandles((result) => {
      const handle = result.value[1];
      client.switchWindow(handle);
    })
    .assert.urlEquals('https://clutch.co/profile/insighty#review-510820')
    .closeWindow()
    .windowHandles((result) => {
      const handle = result.value[0];
      client.switchWindow(handle);
    })
    .click('.project-details-btn')
    .assert.urlContains('betteryet')
    .url(LANDING_URL)
    .waitForElementPresent('.right-arrow')
    .click('.right-arrow')
    .pause(1000)
    .click('.full-review-btn')
    .pause(1000)
    .windowHandles((result) => {
      const handle = result.value[1];
      client.switchWindow(handle);
    })
    .assert.urlEquals('https://clutch.co/profile/insighty#review-516735')
    .closeWindow()
    .windowHandles((result) => {
      const handle = result.value[0];
      client.switchWindow(handle);
    })
    .click('.project-details-btn')
    .assert.urlContains('lpma')
    .url(LANDING_URL)
    .pause(2000);
};
