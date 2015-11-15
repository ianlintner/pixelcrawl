var random = require('../util/random');
var bsp = require('../lib/bsp');
var Room = require('../map/room');

var Dungeon = function() {
  this.rooms = [];
  this.hallways = [];
  this.tileData = [[],[]];
  this.width = 0;
  this.height = 0;
};
