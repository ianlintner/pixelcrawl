var Event = require('../core/events/event');
var SortedArray = require("collections/sorted-array");

var EventQueue = function() {
  this.events = new SortedArray();
  this.currentEvent = null;
};

EventQueue.prototype.sendEvent = function queue(event) {
  this.events.push(event);
};

EventQueue.prototype.sendInterruptEvent = function queue(event) {
  this.events.unshift(event);
};

EventQueue.prototype.readEvent = function() {
  this.currentEvent = this.events.shift();
  return this.currentEvent;
};

module.exports = EventQueue;