class Sprite {
  constructor(imagePath, x, y, width, height) {
    this.image = new Image();
    this.image.src = imagePath;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}
