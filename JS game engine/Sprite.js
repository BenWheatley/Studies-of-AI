class Sprite {
	constructor(imageBitmap, position, size, context) {
		this.imageBitmap = imageBitmap;
		this.position = position;
		this.size = size;
		this.context = context;
	}
	
	static cache = {}; // Static cache object to store image bitmaps
	static loadingSprites = {}; // Object to store loading sprites status
	
	static async buildSprite(imageUrl, position, size, context) {
		let imageBitmap = Sprite.cache[imageUrl]; // Check if the image is already cached
		
		if (!imageBitmap) {
			Sprite.loadingSprites[imageUrl] = true; // Set loading status to true
			
			try {
				const response = await fetch(imageUrl);
				const blob = await response.blob();
				imageBitmap = await createImageBitmap(blob);
				
				// Cache the image bitmap for future use
				Sprite.cache[imageUrl] = imageBitmap;
				
				delete Sprite.loadingSprites[imageUrl]; // Remove loading status on success
			} catch (error) {
				console.error(`Failed to load sprite: ${imageUrl}`);
				delete Sprite.loadingSprites[imageUrl]; // Remove loading status on failure
				throw error; // Rethrow the error to propagate it
			}
		}
		
		return new Sprite(imageBitmap, position, size, context);
	}
	
	static stillLoading() {
		const loadingSprites = Object.keys(Sprite.loadingSprites);
		if (loadingSprites.length > 0) {
			console.log(`Stuck loading sprites: ${loadingSprites.join(", ")}`);
		}
		return loadingSprites.length > 0;
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
