exports.sendForm = (client) => {
  client
    .click('.form-btn')
    .setValue('input[name=name]', 'Insighty Studio Test')
    .setValue('input[name=email]', 'insighty@studio')
    .setValue('input[name=phone]', '+1234567890')
    .setValue('input[name=website]', 'insighty.studio')
    .setValue('textarea[name=message]', 'Don\'t worry, it\'s just a test.')
    .assert.containsText('.form-btn .button-hover-text', 'SEND')
    .click('.form-btn')
    .waitForElementVisible('.notification-success', 2000)
    .assert.containsText('.form-btn .button-hover-text', 'THANKS!')
    .end();
};
