var random = require('../util/random');
var bsp = require('../lib/bsp');
var Room = require('../map/room');
var SortedArray = require("collections/sorted-array");

var Dungeon = function(levelData) {
  this.rooms = new SortedArray();
  this.hallways = new SortedArray();
  this.tileData = [[],[]];
  this.width = 0;
  this.height = 0;
  this.levelData = levelData;
  this.divisions = null;

};

Dungeon.prototype.generateDungeon = function generateDungeon() {
  this.divideDungeon();
  this.generateRooms();
};

Dungeon.prototype.divideDungeon = function divideDungeon() {
  this.divisions = bsp(100,100, this.levelData.sectionFrequency.minimum, this.levelData.sectionFrequency.maximum);
};

Dungeon.prototype.generateRooms = function generateRooms() {
  if(this.divisions != null) {
    for (var j = 0; j < this.divisions.length; j++) {
      var currentRoom = this.divisions[j];
      this.rooms.push(currentRoom);
    }
  }
};

module.exports = Dungeon;


