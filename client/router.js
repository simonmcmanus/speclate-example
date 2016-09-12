
var router = require('speclate-router')

window.$ = require('jquery');

router({
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    console.log('routing handled clientside')
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview')
  },
  error: function (err, $container) {
    if (err) {
        $container.html('<h2>There was an error<h2>' + err);
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
