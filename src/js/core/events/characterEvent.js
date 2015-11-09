var BaseEvent = require('../js/core/events/baseEvent');

var CharacterEvent = function CharacterEvent(creator) {
  BaseEvent.call(this);
  this.creator = creator;
};

CharacterEvent.prototype = Object.create(BaseEvent.prototype);

CharacterEvent.prototype.selectedActorExists = function selectedActorExists(actorList, selectedActor) {
  for(var i=0;i<actorList.length;i++) {
    if(selectedActor.id == actorList[i].id) {
      return true;
    }
  }
  return false;
};

CharacterEvent.prototype.creatorExists = function creatorExists(actorList) {
  this.selectedActorExists(actorList, this.creator);
};

module.exports = CharacterEvent;