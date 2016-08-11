
var spec = require('../spec')
var router = require('speclate-router')

//window.$ = require('jquery')

router(spec, {
  before: function () {
    $('nav a.active').removeClass('active')
  },
  after: function () {
    $('html,body').scrollTop($('#container'))
  },
  error: function (err) {
    if (err) {
      location.reload()
    }
  }
})