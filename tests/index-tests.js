/*
  The chalk library allows console.log messages to use colors and font styles

  Simple usage:

  console.log(chalk.red('message'))

  Our tests use proxyquire to provide a fake for the chalk package

  To simulate the chalk library we return the message that was sent to chalk without styles
  we then assert the correct chalk style was used
*/

// Test dependencies
var chai = require('chai');
var sinon = require('sinon');
var proxyquire = require('proxyquire');

var expect = chai.expect;
var assert = chai.assert;


// Proxyquire fakery setup
var chalkPassThrough = function(message) { return message };  // simulate chalk functionality
var redBoldSpy = sinon.spy(chalkPassThrough);                 // color red and font bold
var yellowBoldSpy = sinon.spy(chalkPassThrough);              // color yellow and font bold
var greenSpy = sinon.spy(chalkPassThrough);                   // color green and defaults
var bgRedSpy = sinon.spy(chalkPassThrough);                   // background color red and defaults

var chalkProxy = {
  red: {
    bold: redBoldSpy
  },
  yellow: {
    bold: yellowBoldSpy
  },
  green: greenSpy,
  bgRed: bgRedSpy
};

// System Under Test
var fixture = proxyquire('../index', { 'chalk': chalkProxy });


describe('boast-console', function() {
  describe('error', function() {
    it('calls expected chalk style', function() {
      fixture.error('Test Error Message');

      sinon.assert.callCount(bgRedSpy, 1);
      sinon.assert.callCount(redBoldSpy, 1);
    });
  });

  describe('warning', function() {
    it('calls expected chalk style', function() {
      fixture.warning('Test Warning Message');

      sinon.assert.callCount(yellowBoldSpy, 1);
    });
  });

  describe('log', function() {
    it('calls expected chalk style', function() {
      fixture.log('Test Log Message');

      sinon.assert.callCount(greenSpy, 1);
    });
  });
});
