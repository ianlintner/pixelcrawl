var Coordinate = require('../util/coordinate.js');
var mapCalculator = require('../util/mapCalculator.js');

var CanMoveRule = function() {
};

CanMoveRule.prototype.evaluate = function evaluate(data) {
  var attemptedMove = mapCalculator.calculateMove(data.character.location, data.direction);
  for(var i=0;i<this.data.possibleMoves.length;i++) {
    if(this.data.possibleMoves[i].isSameCoordinate(this.attemptedMove)) {
      return this.data.possibleMoves[i].locationInformation.isInWorld && this.data.possibleMoves[i].locationInformation.isPassable && this.data.possibleMoves[i].locationInformation.isOpen;
    }
  }
  return false;
};

module.exports = PlayerCanMoveRule;