var chalk = require('chalk');
var beep = require('beepbeep')

var error = chalk.red.bold;
var bgError = chalk.bgRed;
var warning = chalk.yellow.bold;
var log = chalk.green;

module.exports.error = function(message) {
  console.log(bgError('               Boast Console Error               '));
  console.log(error(message));

  beep(1);
};

module.exports.warning = function(message) {
  console.log(warning(message));
};

module.exports.log = function(message) {
  console.log(log(message));
};
