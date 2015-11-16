var Coordinate = require('../lib/geometry/coordinate.js');

module.exports.calculateMove = function calculateMove(coordinate, direction) {
  var move = getDirection(direction,true);
  return new Coordinate(coordinate.x + move[0], coordinate.y + move[1]);
};

module.exports.getDirection = function getDirection(direction, cardinal) {
  if (cardinal) {
    switch (direction) {
      case 0:
        return [0, 1];
      case 1:
        return [1, 0];
      case 2:
        return [0, -1];
      case 3:
        return [-1, 0];
    }
  }
  else {
    switch (direction) {
      case 0:
        return [0, 1];
      case 1:
        return [1, 1];
      case 2:
        return [1, 0];
      case 3:
        return [1, -1];
      case 4:
        return [0, -1];
      case 5:
        return [-1, -1];
      case 6:
        return [-1, 0];
      case 7:
        return [-1, 1];
    }
  }
  return [0,0];
};