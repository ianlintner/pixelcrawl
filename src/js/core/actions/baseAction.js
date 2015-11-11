var BaseAction = function(ui, entities, data) {
  this.ui = ui;
  this.entities = entities;
};

BaseAction.prototype.execute = function() {
  this.beforeAction();
  this.performAction();
  this.afterAction();
};

BaseAction.prototype.beforeAction = function beforeAction() {

};

BaseAction.prototype.performAction = function performAction() {

};

BaseAction.prototype.afterAction = function afterAction() {

};

module.exports = BaseAction;