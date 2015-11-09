var random = require("../util/random");

module.exports.checkAttack = function(attackStat, defensiveStat) {
  var roll = random.getRandomInt(0,20);
  return 0;
};

module.exports.checkDamage = function(attackStat, defensiveStat) {
  var roll = random.getRandomInt(attackStat.weaponDamageMin, attackStat.weaponDamageMax);
  return 0;
};