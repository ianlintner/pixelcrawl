var BaseListener = function() {
  this.eventTypes = [];
};

BaseListener.prototype.eventReceived = function eventRecieved(event) {
  for(var i=0;i<this.eventTypes.length;i++) {
    if(this.eventTypes[i] == event.type) {
      this.react(event);
    }
  }
};

BaseListener.prototype.react = function react(event) {

};

module.exports = BaseListener;
