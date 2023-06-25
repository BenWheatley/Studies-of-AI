class Sprite {
	constructor(imageBitmap, position, size, context) {
		this.imageBitmap = imageBitmap;
		this.position = position;
		this.size = size;
		this.context = context;
	}
	
	static cache = {}; // Static cache object to store image bitmaps
	static loadingSprites = 0; // Counter for tracking loading sprites
	
	static async buildSprite(imageUrl, position, size, context) {
		let imageBitmap = Sprite.cache[imageUrl]; // Check if the image is already cached
		
		if (!imageBitmap) {
			Sprite.loadingSprites++; // Increment the loadingSprites counter
			
			const response = await fetch(imageUrl);
			const blob = await response.blob();
			imageBitmap = await createImageBitmap(blob);
			
			// Cache the image bitmap for future use
			Sprite.cache[imageUrl] = imageBitmap;
			
			Sprite.loadingSprites--; // Decrement the loadingSprites counter
		}
		
		return new Sprite(imageBitmap, position, size, context);
	}
	
	static stillLoading() {
		return Sprite.loadingSprites > 0;
	}
	
	draw() {
		this.context.drawImage(
			this.imageBitmap,
			this.position.x,
			this.position.y,
			this.size.x,
			this.size.y
		);
	}
}
