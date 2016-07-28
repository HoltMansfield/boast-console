/*
  There are no assertions here,

  These are not real tests, these are to demonstrate what our console functions produce
*/

// Test dependencies
var chai = require('chai');
var sinon = require('sinon');

var expect = chai.expect;
var assert = chai.assert;


// System Under Test
var fixture = require('../index');


describe('demonstrate boast-console', function() {
  describe('error', function() {
    it('calls expected chalk style', function() {
      fixture.error('Test Error Message');
    });
  });

  describe('warning', function() {
    it('calls expected chalk style', function() {
      fixture.warning('Test Warning Message');
    });
  });

  describe('log', function() {
    it('calls expected chalk style', function() {
      fixture.log('Test Log Message');
    });
  });
});
