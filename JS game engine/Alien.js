class Alien {
  static imageUrl = 'alien-ship.png';
  static size = new Vector2D(50, 50);
  static health = 100;

  constructor(position) {
    this.sprite = new Sprite(Alien.imageUrl, position, Alien.size);
    this.health = Alien.health;
  }

  draw() {
    this.sprite.draw();
  }
}
