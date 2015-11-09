var AttackStats = function AttackStats() {
  //Accuracy
  this.BaseAttackBonus = 0;
  this.TemporaryAttackBonus = 0;
  this.WeaponAttackBonus = 0;

  //Damage
  this.BaseDamageBonus = 0;
  this.TemporaryDamageBonus = 0;
  this.WeaponDamageBonus = 0;

  this.WeaponDamageMin = 0;
  this.WeaponDamageMax = 0;
};

module.exports = AttackStats;