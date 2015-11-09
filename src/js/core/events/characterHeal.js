var CharacterEvent = require('../js/core/events/baseEvent');

var CharacterHeal = function CharacterHeal(creator, target, options) {
  BaseEvent.call(this);
  this.creator = creator;
  this.target = target;
  this.options = options;
};

CharacterEvent.prototype = Object.create(BaseEvent.prototype);

BaseEvent.prototype.resolveEvent = function resolveEvent() {
  this.target.removeDamage(this.options.value);
};

module.exports = CharacterHeal;