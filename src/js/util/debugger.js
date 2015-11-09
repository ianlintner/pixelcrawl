var bsp = require('../lib/bsp');
var random = require('../util/random.js');

module.exports = function test() {
  var leafs = bsp(100,100,random);
  return leafs;
};