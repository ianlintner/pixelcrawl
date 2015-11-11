var Event = require('../core/listener/baseListener');

var MoveListener = function(gameSystem) {
  this.eventTypes = ['move'];
};

MoveListener.prototype.react = function react(event) {

};


module.exports = MoveListener;

