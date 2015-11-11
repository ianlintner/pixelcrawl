var BaseActor = require('baseActor');

var BaseCharacter = function() {
  BaseActor.call(this);

  this.strength = 0;
  this.dexterity = 0;
  this.constitution = 0;
  this.intelligence = 0;
  this.wisdom = 0;
  this.charisma = 0;

  this.hitDice = 0;
  this.maxhitPoints = 0;
  this.hitPoints = 0;

  this.baseMovement = 0;
  this.totalMoves = 0;
  this.maxAge = 0;
  this.age = 0;
  this.turnComplete = true;
};

BaseCharacter.prototype = Object.create(BaseActor.prototype);

BaseCharacter.prototype.Move = function move(newPosition) {
  this.totalMoves++;
  this.position = newPosition;
};

BaseCharacter.prototype.takeDamage = function takeDamage(value) {
  this.hitPoints -= value;
};

BaseCharacter.prototype.removeDamage = function takeDamage(value) {
  if((this.hitPoints + value) <= this.maxhitPoints) {
    this.hitPoints -= value;
  }
  else {
    this.hitPoints = this.maxhitPoints;
  }
};

module.exports = BaseCharacter;