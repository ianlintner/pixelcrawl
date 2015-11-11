var BaseRule = function() {

};

BaseRule.evaluate = function evaluate(data) {
  if(data !== undefined) {
    return true;
  }
  else {
    return false;
  }

};

module.exports = BaseRule;