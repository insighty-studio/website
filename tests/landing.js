module.exports = {
  'Demo test Google': (client) => {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 10000)
      .end();
  }
};
