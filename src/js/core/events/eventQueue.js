var EventQueue = function EventQueue() {
  this.events = [];
  this.currentEvent = null;
};

EventQueue.prototype.sendEvent = function queue(event) {
  this.events.push(event);
};

EventQueue.prototype.sendInterruptEvent = function queue(event) {
  this.events.push(0);
};

EventQueue.prototype.getEvent = function() {
  if(this.events.length > 0) {
    this.currentEvent = this.events.shift();
    return this.currentEvent;
  }
  else {
    return null;
  }
};

EventQueue.prototype.peek = function() {
  if(this.events.length > 0) {
   return this.events[0];
  }
  else {
    return null;
  }
};

EventQueue.prototype.readEvent = function() {
  return this.currentEvent;
};

module.exports = EventQueue;