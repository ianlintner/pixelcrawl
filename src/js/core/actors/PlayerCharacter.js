var BaseCharacter = require('../js/core/actors/BaseCharacter');

var PlayerCharacter = function() {
  BaseCharacter.call(this);
  this.class = '';
  this.level = 0;
  this.experiencePoints = 0;
  this.manaPoints = 0;
  this.hunger = 0;
  this.statusEffects = [];
  this.inventory = [];
  this.combatStats = {};
};

BaseCharacter.prototype = Object.create(BaseCharacter.prototype);

module.exports = BaseCharacter;