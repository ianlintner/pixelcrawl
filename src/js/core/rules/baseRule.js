/**
 * Abstract class for rules
 * @constructor
 */
var BaseRule = function() {

};

/**
 * Base example evaluate method.
 * @param data
 * @returns {boolean}
 */
BaseRule.evaluate = function evaluate(data) {
  if(data !== undefined) {
    return true;
  }
  else {
    return false;
  }

};

module.exports = BaseRule;