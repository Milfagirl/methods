import Character from './base.js';

export default class Swordsman extends Character {
  constructor(options) {
    super(options);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    super.levelUp();
    return this;
  }

  damage(points) {
    super.damage(points);
    return this;
  }
}
