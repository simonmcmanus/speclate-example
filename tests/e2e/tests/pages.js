// this should really be generated from the spec and handle js/no-js. also only firefox atm.

module.exports = {
  'homepage loads': function (browser) {
    browser
      .url('http://localhost:5007/index.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#container', 'home')
      .end()
  },

  'contact': function (browser) {
    browser
      .url('http://localhost:5007/contact.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#container', 'Welcome to the contact page')
      .end()
  },

  'about': function (browser) {
    browser
      .url('http://localhost:5007/about.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#container', 'Welcome to the about page')
      .end()
  },


}
