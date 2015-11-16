var Coordinate = require('../../lib/geometry/coordinate');
var math = require('mathjs');

module.exports.findRectangleCenter = function(x1,x2,y1,y2) {
  return new Coordinate((x1+x2)/2,(y1+y2)/2);
};

module.exports.findRectangleCenterRound = function(x1,x2,y1,y2) {
  return new Coordinate(Math.ceil((x1+x2)/2),Math.ceil((y1+y2)/2));
};