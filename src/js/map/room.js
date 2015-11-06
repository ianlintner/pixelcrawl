/**
 * Basic Room (square)
 * @constructor
 */
var Room = function() {
  this.tiles = [];
  this.doors = [];
  this.floorTile = 0;

  //minimal room size
  this.width = 3;
  this.height = 3;
  this.x = 0;
  this.y = 0;
};

/**
 * Renders the room on a specified layer in the map.
 * @param map
 * @param layer
 */
Walk.prototype.render = function render(map, layer) {
  map.fill(this.floorTile, this.x, this.y, this.width, this.height, layer);
};

module.exports = Room;