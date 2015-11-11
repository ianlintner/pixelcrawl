var Coordinate = require('../util/Coordinate');

var BaseActor = function BaseActor() {
  this.id = 0;
  this.name = '';
  this.size = 0;
  this.position = new Coordinate(0,0);
};

module.exports = BaseActor;