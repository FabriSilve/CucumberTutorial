const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const Utils = require('../src/Utils');

defineSupportCode(function({ Before, Given, Then, When }) {
  let util;

  Before(function () {
    util = null;
  });

  Given('I start with {int}', function (input) {
    util = new Utils(input);
  });

  When('I add {int}', function (input) {
    util.add(input);
  });
  When('I multiply by {int}', function (input) {
    util.times(input);
  });

  Then('I end up with {int}', function (input) {
    assert.equal(util.result(), input);
  });
});
