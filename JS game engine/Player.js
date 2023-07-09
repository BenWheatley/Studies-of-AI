class Player extends GameEntity {
  static imageUrl = 'player-ship.png';
  static size = new Vector2D(48, 48);
  static health = 100;
  static forwardAcceleration = 0.5;
  static backwardAcceleration = 0.3;
  static maxSpeed = 5;
  static rotationalSpeed = Math.PI / 180 * 3;

  constructor() {
    super(new Vector2D(0, 0), 0, new Vector2D(), Player.size, Player.imageUrl);
  }

  accelerate(deltaTime) {
    const accelerationVector = Vector2D.fromAngle(this.sprite.rotation).mul(Player.forwardAcceleration);
    const velocityChange = accelerationVector.mul(deltaTime);
    this.velocity = this.velocity.add(velocityChange);
    this.clampSpeed();
  }

  reverseThrust(deltaTime) {
    const decelerationVector = Vector2D.fromRadial(this.sprite.rotation, 1).mul(Player.backwardAcceleration);
    const velocityChange = decelerationVector.mul(deltaTime);
    this.velocity = this.velocity.add(velocityChange);
    this.clampSpeed();
  }

  turnLeft(deltaTime) {
    this.sprite.rotation -= Player.rotationalSpeed * deltaTime;
  }

  turnRight(deltaTime) {
    this.sprite.rotation += Player.rotationalSpeed * deltaTime;
  }

  clampSpeed() {
    const speed = this.velocity.mag();
    if (speed > Player.maxSpeed) {
      this.velocity = this.velocity.norm().mul(Player.maxSpeed);
    }
  }
}
