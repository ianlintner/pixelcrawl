var Coordinate = require('../../lib/geometry/coordinate');
var MidPoint = require('../../lib/geometry/midPoint');
var Line = require('../../lib/geometry/line');
var math = require('mathjs');

var Tunneler = function(width, height) {
  this.width = width;
  this.height = height;
};

/**
 * @TODO Move to another object
Tunneler.prototype.createTunnelBetweenRooms = function createTunnelBetweenRooms(roomStart, roomEnd) {
  var midPointStart = MidPoint.findRectangleCenterRound(roomStart.x, roomStart.x + roomStart.width, roomStart.y, roomStart.y + roomStart.height);
  var midPointEnd = MidPoint.findRectangleCenterRound(roomEnd.x, roomEnd.x + roomEnd.width, roomEnd.y, roomEnd.y + roomEnd.height);
  var currentPosition = new Coordinate(midPointStart.x, midPointStart.y);
  return this.createTunnel(midPointStart, midPointEnd);
};
 **/

Tunneler.prototype.createTunnel = function createTunnel(startCoordinate, endCoordinate) {
  var currentPosition = new Coordinate(startCoordinate.x, startCoordinate.y);
  var steps = [];
  if(currentPosition.x != endCoordinate.x) {
    var sectionSteps = Line.traceMapLine(currentPosition,new Coordinate(endCoordinate.x,currentPosition.y));
    steps = steps.concat(steps,sectionSteps);
    currentPosition = steps[steps.length-1];
  }
  if(currentPosition.y != endCoordinate.y) {
    var sectionSteps = Line.traceMapLine(currentPosition,new Coordinate(currentPosition.x,endCoordinate.y));
    steps = steps.concat(steps,sectionSteps);
  }

  return steps;
};


Tunneler.prototype.createTunnelDiagonal = function createTunnelDiagonal(startCoordinate, endCoordinate) {
  Line.traceMapLine(startCoordinate,endCoordinate);
};


module.exports = Tunneler;