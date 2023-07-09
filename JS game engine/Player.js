class Player extends GameEntity {
  static imageUrl = 'player-ship.png';
  static size = new Vector2D(48, 48);
  static acceleration = 0.1;
  static deceleration = 0.05;
  static maxSpeed = 5;
  static rotationalSpeed = 0.1;

  constructor() {
    super(new Vector2D(0, 0), 0, new Vector2D(), Player.size, Player.imageUrl);
  }

  accelerateForward() {
    const accelerationVector = new Vector2D(
      Math.cos(this.sprite.rotation) * Player.acceleration,
      Math.sin(this.sprite.rotation) * Player.acceleration
    );
    this.velocity = this.velocity.add(accelerationVector);
    if (this.velocity.magnitude() > Player.maxSpeed) {
      this.velocity = this.velocity.normalize().multiply(Player.maxSpeed);
    }
  }

  decelerate() {
    const decelerationVector = this.velocity.normalize().multiply(-Player.deceleration);
    if (decelerationVector.magnitude() > this.velocity.magnitude()) {
      this.velocity = new Vector2D();
    } else {
      this.velocity = this.velocity.add(decelerationVector);
    }
  }

  turnLeft() {
    this.sprite.rotation -= Player.rotationalSpeed;
  }

  turnRight() {
    this.sprite.rotation += Player.rotationalSpeed;
  }
}
