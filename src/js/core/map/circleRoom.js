/**
 * Basic Room (square)
 * @constructor
 */
var CircleRoom = function(x, y, width, height) {
  this.tiles = [];
  this.doors = [];
  this.floorTile = 0;

  //minimal room size
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
};

CircleRoom.prototype.createRoom = function createRoom(roomOptions) {
  this.width = roomOptions.maxWidth;
  this.height = roomOptions.maxHeight;
  this.x = roomOptions.x;
  this.y = roomOptions.y;
  return this;
}

/**
 * Renders the room on a specified layer in the map.
 * @param map
 * @param layer
 */
CircleRoom.prototype.render = function render(map, layer) {
  map.fill(this.floorTile, this.x, this.y, this.width, this.height, layer);
};


CircleRoom.prototype.drawCircle = function drawCircle(x0, y0, radius){
  var output = [];
  for (var x = -radius; x < radius ; x++) {
    var height = Math.sqrt(radius * radius - x * x);

    for (var y = -height; y < height; y++) {
      output.push([x+x0,y+y0]);
    }
  }
  return output;
};

module.exports = CircleRoom;