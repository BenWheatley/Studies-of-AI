class GPTEngine {
	constructor(document, canvasName) {
		if (!GPTEngine.instance) {
			this._document = document;
			this._canvas = document.getElementById(canvasName);
			this._configureUserInput()
			
			GPTEngine.instance = this;
		}
		
		return GPTEngine.instance;
	}
	
	_configureUserInput() {
		this._mousePos = new Vector2D();
		this._canvas.addEventListener("mousemove", (e) => {
			this._mousePos.x = e.clientX;
			this._mousePos.y = e.clientY;
		});
		this._keyDown = {};
		this._document.addEventListener('keydown', (e) => {
			this._keyDown[e.key] = true;
		});
		this._document.addEventListener('keyup', (e) => {
			this._keyDown[e.key] = false;
		});
		this._document.addEventListener("gamepadconnected", function(e) {
			const gamepad = e.gamepad;
			console.log("Gamepad connected:", gamepad.id);
		});
		this._document.addEventListener("gamepaddisconnected", function(e) {
			const gamepad = e.gamepad;
			console.log("Gamepad disconnected:", gamepad.id);
		});
	}
	
	get mousePos() { return this._mousePos; }
	get keyDown() { return this._keyDown; }
	
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
		
		// make canvas full screen
		this._oldStyleCopy = Object.assign({}, this._canvas.style);
		var style = this._canvas.style;
		style.position = 'fixed';
		style.top = '0';
		style.left = '0';
		style.width = '100%';
		style.height = '100%';
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
	
	static begin(document, canvasName) {
		return new GPTEngine(document, canvasName);
	}
}
