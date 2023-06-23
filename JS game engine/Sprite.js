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

  moveBy(vector) {
    this.position = this.position.add(vector);
  }

  hitTest(point) {
    const spriteTopLeft = this.position;
    const spriteBottomRight = this.position.add(this.size);
    
    // check if point is within sprite bounds
    if (point.x < spriteTopLeft.x || point.x > spriteBottomRight.x ||
        point.y < spriteTopLeft.y || point.y > spriteBottomRight.y) {
      return false;
    }
    
    // calculate the pixel position within the image
    const pixelX = Math.floor((point.x - spriteTopLeft.x) * (this.image.width / this.size.x));
    const pixelY = Math.floor((point.y - spriteTopLeft.y) * (this.image.height / this.size.y));
    
    // get the pixel data and check alpha value
    const context = document.createElement('canvas').getContext('2d');
    context.drawImage(this.image, 0, 0, this.image.width, this.image.height);
    const pixelData = context.getImageData(pixelX, pixelY, 1, 1).data;
    return pixelData[3] > 0;
  }
}
