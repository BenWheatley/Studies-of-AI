class GPTEngine {
	constructor(document) {
		if (!GPTEngine.instance) {
			this._document = document;
			GPTEngine.instance = this;
		}
		
		return GPTEngine.instance;
	}
	
	enterFullScreen() {
		const element = this._document.documentElement;
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) { // Firefox
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) { // IE/Edge
			element.msRequestFullscreen();
		}
	}
	
	exitFullScreen() {
		if (this._document.exitFullscreen) {
			this._document.exitFullscreen();
		} else if (this._document.mozCancelFullScreen) { // Firefox
			this._document.mozCancelFullScreen();
		} else if (this._document.webkitExitFullscreen) { // Chrome, Safari, Opera
			this._document.webkitExitFullscreen();
		} else if (this._document.msExitFullscreen) { // IE/Edge
			this._document.msExitFullscreen();
		}
	}
	
	get isFullScreen() {
		const doc = this._document;
		return (
			doc.fullscreenElement ||
			doc.mozFullScreenElement ||
			doc.webkitFullscreenElement ||
			doc.msFullscreenElement
		);
	}
	
	toggleFullScreen() {
		if (this.isFullScreen) {
			this.exitFullScreen();
		} else {
			this.enterFullScreen();
		}
	}
	
	static getInstance(document) {
		return GPTEngine.instance || new GPTEngine(document);
	}
}
