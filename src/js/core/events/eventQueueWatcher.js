var Map = require("collections/map");
var List = require("collections/list");

var EventQueueWatcher = function() {
  this.listeners = new Map();
};

EventQueueWatcher.prototype.addListener = function addListener(listener) {
  for(var type in listener.eventTypes) {
    if(!this.listeners.has(type)) {
      this.listeners.set(new List());
    }
    if(!this.listeners.get(type).has(listener)) {
      this.listeners.get(type).push(listener);
    }
  }
};

EventQueueWatcher.prototype.removeListener = function addListener(listener) {
  for(var type in listener.eventTypes) {
    if(this.listeners.has(type)) {
      if(this.listeners.get(type).has(listener)) {
        this.listeners.get(type).delete(listener);
      }
    }
  }
};

EventQueueWatcher.prototype.notify = function Notify(event) {
  if(this.listeners.has(type)) {
    this.listners.get(type).forEach(function (value) {
      value.react(event);
    });
  }
};