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
    const accelerationVector = Vector2D.fromAngle(this.sprite.rotation).multiply(Player.forwardAcceleration);
    const velocityChange = accelerationVector.multiply(deltaTime);
    this.velocity = this.velocity.add(velocityChange);
    this.clampSpeed();
  }

  reverseThrust(deltaTime) {
    const decelerationVector = Vector2D.fromAngle(this.sprite.rotation + Math.PI).multiply(Player.backwardAcceleration);
    const velocityChange = decelerationVector.multiply(deltaTime);
    this.velocity = this.velocity.add(velocityChange);
    this.clampSpeed();
  }

  turnLeft() {
    this.sprite.rotation -= Player.rotationalSpeed;
  }

  turnRight() {
    this.sprite.rotation += Player.rotationalSpeed;
  }

  clampSpeed() {
    const speed = this.velocity.magnitude();
    if (speed > Player.maxSpeed) {
      this.velocity = this.velocity.normalize().multiply(Player.maxSpeed);
    }
  }
}
