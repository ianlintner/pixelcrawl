var Room = require('../map/room');
var CircleRoom = require('../map/room');
var CustomRoom = require('../map/room');

var roomFactory = function(roomType, generatorType) {
  this.roomClass = roomType;
  this.generatorType = generatorType;
};

roomFactory.prototype.createRoom = function createRoom(roomOptions) {
  switch(options.roomType){
    case "Square":
      this.roomClass = Room;
      break;
    case "Circle":
      this.roomClass = CircleRoom;
      break;
    case "Custom":
      this.roomClass = CustomRoom;
      break;
    default:
      this.roomClass = Room;
      break;
  }
  switch(options.generatorType){
    case "Random":
      this.generatorType = "Random";
      break;
    case "Static":
      this.generatorType = "Static";
      break;
    default:
      this.generatorType = "Random";
      break;
  }

  if(this.generatorType == "Random") {
    this.createRandomRoom(roomOptions);
  }
  else {
   this.createStaticRoom(roomOptions);
  }


};


roomFactory.prototype.createRandomRoom = function createRandomRoom(roomOptions) {
  // the room can be between l x w tiles to the size of the leaf - 2.
  var roomSize = [random.getRandomInt(roomOptions.minWidth, roomOptions.maxWidth - 2), random.getRandomInt(roomOptions.minWidth, roomOptions.maxHeight - 2)];

  // place the room within the Leaf, but don't put it right
  // against the side of the Leaf (that would merge rooms together)
  var roomPos = [random.getRandomInt(1, roomOptions.maxWidth - roomSize[0] - 1), random.getRandomInt(1, roomOptions.maxHeight - roomSize[1] - 1)];
  var room = new this.roomClass(roomOptions.x + roomPos[0], roomOptions.y + roomPos[1], roomSize[0], roomSize[1]);
  return room;
};

roomFactory.prototype.createStaticRoom = function createStaticRoom(roomOptions) {
  var room = new this.roomClass.createRoom(roomOptions);
  return room;
}

module.exports = roomFactory;