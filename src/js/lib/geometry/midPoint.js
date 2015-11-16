var Coordinate = require('../../lib/geometry/coordinate');
var math = require('mathjs');

module.exports.findRectangleCenter = function(x1,x2,y1,y2) {
  return new Coordinate((x1+x2)/2,(y1+y2)/2);
};