const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const Utils = require('../src/Utils');

defineSupportCode(function({ Before, Given, Then, When }) {
  let util = new Utils();

  Before(function () {
    util = new Utils();
  })
  Given('I start with {int}', function (input) {
    util.add(input);
  });
  When('I add {int}', function (input) {
    util.add(input);
  });
  Then('I end up with {int}', function (input) {
    assert.equal(util.result(), input);
  });
});
