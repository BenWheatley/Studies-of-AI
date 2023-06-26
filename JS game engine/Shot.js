class Shot {
  static imageUrl = 'shot.png';
  static size = new Vector2D(10, 10);
  static velocity = new Vector2D(0, -5);
  static damage = 10;

  constructor(position) {
    this.sprite = new Sprite(Shot.imageUrl, position, Shot.size);
    this.velocity = Shot.velocity;
    this.damage = Shot.damage;
  }

  draw() {
    this.sprite.draw();
  }
}
