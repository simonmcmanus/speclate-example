
var spec = require('../spec')
var router = require('speclate-router')

window.$ = require('jquery');

router(spec, {
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    console.log('routing handled clientside')
  },
  error: function (err) {
    if (err) {
      console.log('Error with clientside routing', err);
      location.reload()
    }
  }
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope)
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err)
  })
}
