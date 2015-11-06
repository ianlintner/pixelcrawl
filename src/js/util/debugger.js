var bsp = require('../lib/bsp');

module.exports = function test() {
  var leafs = bsp(100,100);
  return leafs;
};