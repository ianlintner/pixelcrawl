var MidPoint = require('../../lib/geometry/midPoint');

/**
 * Basic Room (square)
 * @constructor
 */
var Room = function(x, y, width, height) {
  this.tiles = [];
  this.doors = [];
  this.floorTile = 0;

  //minimal room size
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.midPoint = MidPoint.findRectangleCenter(this.x, this.x+width, this.y, this.y+height);
};

Room.prototype.createRoom = function createRoom(roomOptions) {
  this.width = roomOptions.maxWidth;
  this.height = roomOptions.maxHeight;
  this.x = roomOptions.x;
  this.y = roomOptions.y;
  return this;
};

/**
 * Renders the room on a specified layer in the map.
 * @param map
 * @param layer
 */
Room.prototype.render = function render(map, layer) {
  map.fill(this.floorTile, this.x, this.y, this.width, this.height, layer);
};


module.exports = Room;