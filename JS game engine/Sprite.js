class Sprite {
	constructor(imageBitmap, position, size, context) {
		this.imageBitmap = imageBitmap;
		this.position = position;
		this.size = size;
		this.context = context;
		this.createPixelDataFromCurrentBitmap();
	}
	
	createPixelDataFromCurrentBitmap() {
		const offscreen = new OffscreenCanvas(this.imageBitmap.width, this.imageBitmap.height);
		const context = offscreen.getContext('bitmaprenderer');
		context.transferFromImageBitmap(this.imageBitmap);
		const imageData = context.getImageData(
			0, 0,
			this.imageBitmap.width, this.imageBitmap.height
		);
		this.pixelData = imageData.data;
	}

	draw() {
		this.context.drawImage(
			this.imageBitmap,
			this.position.x, this.position.y,
			this.size.x, this.size.y
		);
	}
	
	moveBy(vector) {
		this.position = this.position.add(vector);
	}
	
	hitTest(point) {
		const spriteTopLeft = this.position;
		const spriteBottomRight = this.position.add(this.size);
	
		// Check if point is within sprite bounds
		if (point.x < spriteTopLeft.x || point.x > spriteBottomRight.x ||
			point.y < spriteTopLeft.y || point.y > spriteBottomRight.y) {
			return false;
		}
		
		// Calculate the pixel position within the image
		const pixelX = Math.floor((point.x - spriteTopLeft.x) * (this.imageBitmap.width / this.size.x));
		const pixelY = Math.floor((point.y - spriteTopLeft.y) * (this.imageBitmap.height / this.size.y));
		
		// Get the pixel data and check alpha value
		const index = (pixelY * this.image.width + pixelX) * 4;
		const alpha = this.pixelData[index + 3];
		return alpha > 0;
	}
}
