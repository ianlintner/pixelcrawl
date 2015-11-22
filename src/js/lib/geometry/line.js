var Coordinate = require('../../lib/geometry/coordinate');

/**
 * Creates a walkable line rather than a traditional line
 * Uses standard plotting formula but modified are connected with
 * a cardinal path NESW
 * @param coordinate1
 * @param coordinate2
 * @returns {Array}
 */
module.exports.traceMapLine = function traceMapLine(coordinate1, coordinate2) {

  var path = [];
  var dx = coordinate2.x - coordinate1.x;
  var dy = coordinate2.y - coordinate1.y;
  var m = dy/dx;
  var currentCoordinate = new Coordinate(coordinate1.x, coordinate1.y);

  //Just do a straight line so we avoid more complex calculations
  if(dx == 0) {
    path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    while(currentCoordinate.y < coordinate2.y) {
      currentCoordinate.y++;
      path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    }
  }
  else if(dy == 0) {
    path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    while(currentCoordinate.x < coordinate2.x) {
      currentCoordinate.x++;
      path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    }
  }
  else if(Math.abs(m)>1) {
    var yIncrement = 1;
    if(dy < 0) {
      yIncrement = -1;
    }
    var xIncrement = 1;
    if(dx < 0) {
      xIncrement = -1;
    }
    path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    while(currentCoordinate.x != coordinate2.x) {
      currentCoordinate.x += xIncrement;
      path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
      var newY = Math.round(coordinate1.y + dy * (currentCoordinate.x - coordinate1.x) / dx);
      while(currentCoordinate.y != newY) {
        currentCoordinate.y += yIncrement;
        path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
      }
    }
  }
  else if(m<1) {
    var yIncrement = 1;
    if(dy < 0) {
      yIncrement = -1;
    }
    var xIncrement = 1;
    if(dx < 0) {
      xIncrement = -1;
    }
    path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
    while(currentCoordinate.y != coordinate2.y) {
      currentCoordinate.y += yIncrement;
      path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
      var newX = Math.round(coordinate1.x + dx * (currentCoordinate.y - coordinate1.y) / dy);
      while(currentCoordinate.x != newX) {
        currentCoordinate.x += xIncrement;
        path.push(new Coordinate(currentCoordinate.x, currentCoordinate.y));
      }
    }
  }
  return path;

};