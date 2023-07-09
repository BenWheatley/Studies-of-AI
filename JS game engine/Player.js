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

  accelerateForward(deltaTime) {
    const accelerationVector = new Vector2D(
      Math.cos(this.sprite.rotation) * Player.acceleration,
      Math.sin(this.sprite.rotation) * Player.acceleration
    );
    const velocityChange = accelerationVector.multiply(deltaTime);
    this.velocity = this.velocity.add(velocityChange);
    if (this.velocity.mag() > Player.maxSpeed) {
      this.velocity = this.velocity.normalize().multiply(Player.maxSpeed);
    }
  }

  decelerate(deltaTime) {
    const decelerationVector = this.velocity.normalize().multiply(-Player.deceleration);
    const velocityChange = decelerationVector.multiply(deltaTime);
    if (velocityChange.mag() > this.velocity.mag()) {
      this.velocity = new Vector2D();
    } else {
      this.velocity = this.velocity.add(velocityChange);
    }
  }

  turnLeft(deltaTime) {
    this.sprite.rotation -= Player.rotationalSpeed * deltaTime;
  }

  turnRight(deltaTime) {
    this.sprite.rotation += Player.rotationalSpeed * deltaTime;
  }
}

// Other Player class methods or properties
