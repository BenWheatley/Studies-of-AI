class Sprite {
  constructor(imagePath, position, size) {
    this.image = new Image();
    this.image.src = imagePath;
    this.position = position;
    this.size = size;
  }

  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
  }

  move(vector) {
    this.position = this.position.add(vector);
  }
}
