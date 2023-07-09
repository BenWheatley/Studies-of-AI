class GameEntity {
  constructor(position, rotation, velocity, size, imageUrl) {
    this.sprite = new Sprite(imageUrl, position, size);
    this.sprite.rotation = rotation;
    this.velocity = velocity;
  }
  
  draw() {
    this.sprite.draw();
  }
  
  update(deltaTime) {
    // Update the entity's position based on the velocity and time
    const displacement = this.velocity.mul(deltaTime);
    this.sprite.position = this.sprite.position.add(displacement);
  }
}
