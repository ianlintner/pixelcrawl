var MoveAction = function(ui, entities, data) {
  this.ui = ui;
  this.entities = entities;
};

MoveAction.prototype.execute = function() {
  this.beforeAction();
  this.performAction();
  this.afterAction();
};

MoveAction.prototype.beforeAction = function beforeAction() {

};

MoveAction.prototype.performAction = function performAction() {

};

MoveAction.prototype.afterAction = function afterAction() {

};

module.exports = MoveAction;