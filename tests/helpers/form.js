const faker = require('faker');

exports.sendForm = (client) => {
  client
    .click('.form-btn')
    .setValue('input[name=name]', faker.name.firstName())
    .setValue('input[name=email]', faker.internet.email())
    .setValue('input[name=phone]', faker.phone.phoneNumber())
    .setValue('input[name=website]', faker.internet.url())
    .setValue('textarea[name=message]', `Don't worry, it's just a test of ${client.currentTest.name}.`)
    .assert.containsText('.form-btn .button-hover-text', 'SEND')
    .click('.form-btn')
    .waitForElementVisible('.notification-success', 2000)
    .assert.containsText('.form-btn .button-hover-text', 'THANKS!')
    .end();
};
