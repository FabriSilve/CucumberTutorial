const Before = require('cucumber').Before;
const Given = require('cucumber').Given;
const Then = require('cucumber').Then ;
const When = require('cucumber').When;

const assert = require('assert');

const Utils = require('../src/Utils');


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
When('I add the following numbers:', function (table) {
  table.raw()
    .map(row => row[0])
    .map(v => util.add(v))
});


Then('I end up with {int}', function (input) {
  assert.equal(util.result(), input);
});
