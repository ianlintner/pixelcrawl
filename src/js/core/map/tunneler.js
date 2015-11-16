var Coordinate = require('../../lib/geometry/coordinate');
var MidPoint = require('../../lib/geometry/midPoint');
var math = require('mathjs');

var Tunneler = function(width, height) {
  this.width = width;
  this.height = height;
};

Tunneler.prototype.createTunnel = function createTunnel(roomStart, roomEnd) {
  var midPointStart = MidPoint.findRectangleCenter(roomStart.x, roomStart.x + roomStart.width, roomStart.y, roomStart.y + roomStart.height);
  var midPointEnd = MidPoint.findRectangleCenter(roomEnd.x, roomEnd.x + roomEnd.width, roomEnd.y, roomEnd.y + roomEnd.height);
  var currentPosition = new Coordinate(midPointStart.x, midPointStart.y);
  var steps = [];
  if(currentPosition.y < midPointEnd.y) {
    while(currentPosition.y <= midPointEnd.y) {
      steps.push(new Coordinate(currentPosition.x, currentPosition.y));
      currentPosition.y++;
    }
  }
  else if(currentPosition.y > midPointEnd.y) {
    while(currentPosition.y >= midPointEnd.y) {
      steps.push(new Coordinate(currentPosition.x, currentPosition.y));
      currentPosition.y--;
    }
  }
  if(currentPosition.x < midPointEnd.x) {
    while(currentPosition.x <= midPointEnd.x) {
      steps.push(new Coordinate(currentPosition.x, currentPosition.y));
      currentPosition.x++;
    }
  }
  else if(currentPosition.x > midPointEnd.x) {
    while(currentPosition.x >= midPointEnd.x) {
      steps.push(new Coordinate(currentPosition.x, currentPosition.y));
      currentPosition.x--;
    }
  }
  return steps;
};

module.exports = Tunneler;