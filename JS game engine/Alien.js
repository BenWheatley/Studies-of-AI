import { GameEntity } from './GameEntity.js';

class Alien extends GameEntity {
  static imageUrl = 'alien-ship.png';
  static size = new Vector2D(50, 50);
  static health = 100;

  constructor(position) {
    super(position, 0, new Vector2D(0, 0), Alien.size, Alien.imageUrl);
    this.health = Alien.health;
  }
}
