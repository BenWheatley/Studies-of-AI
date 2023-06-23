class Sprite {
	constructor(imageBitmap, position, size, context) {
		this.imageBitmap = imageBitmap;
		this.position = position;
		this.size = size;
		this.context = context;
	}
	
	static async buildSprite(imageUrl, position, size, context) {
		const response = await fetch(imageUrl);
		const blob = await response.blob();
		const imageBitmap = await createImageBitmap(blob);
		return new Sprite(imageBitmap, position, size, context);
	}
	
	draw() {
		this.context.drawImage(
			this.imageBitmap,
			this.position.x, this.position.y,
			this.size.x, this.size.y
		);
	}
}
