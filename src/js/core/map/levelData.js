var LeveData = function() {
  this.width = 0;
  this.height = 0;

  //Frequency Data
  this.roomFreqency = null;
  this.sectionFrequency = null;
  this.foodFrequency = null;
  this.trapRoomFrequency = null;
  this.treasureRoomFrequency = null;
  this.obstacleRoomFrequency = null;
  this.secretRoomFrequency = null;
  this.monsterRoomFrequency = null;
  this.randomMonsterFrequency = null;
  this.randomTrapFrequency = null;

  //Structure Data
  this.structureTile = null;
  this.roomFloorTile = null;
  this.hallwayFloorTile = null;
  this.doorTile = null;
  this.doorTileOpen = null;
  this.enterTile = null;
  this.exitTile = null;
  this.monsterData = null;
  this.obstacleData = null;
  this.treasureData = null;
  this.trapData = null;

};

module.exports = LevelProperties;