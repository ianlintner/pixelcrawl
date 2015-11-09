var CharacterEvent = require('../js/core/events/baseEvent');

var CharacterDamage = function CharacterDamage(creator, target, options) {
  BaseEvent.call(this);
  this.creator = creator;
  this.target = target;
  this.options = options;
};

CharacterEvent.prototype = Object.create(BaseEvent.prototype);

BaseEvent.prototype.resolveEvent = function resolveEvent() {
  this.target.takeDamage(this.options.value);
};

module.exports = CharacterDamage;