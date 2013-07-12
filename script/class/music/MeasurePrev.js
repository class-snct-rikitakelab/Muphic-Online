var MeasurePrev = Class.create(MySprite, {
	initialize : function(image, w, h, originX, originY, scaleX, scaleY, x, y, game) {
		MySprite.call(this, image, w, h, originX, originY, scaleX, scaleY, x, y, game);
	},

	_touchEnable : function() {
		this.opacity = 1.0;
		this.touchEnabled = true;
	},

	_touchDisable : function() {
		this.opacity = 0.5;
		this.touchEnabled = false;
	},

	ontouchend : function(e) {
		this.scene.new_left_measure--;
	},

	onenterframe : function(e) {
		if(this.scene.left_measure === 1) {
			this._touchDisable();
		} else if(this.scene.left_measure > 1 && this.scene.start.state === "stop") {
			this._touchEnable();
		}

		if(this.scene.start.state === "start") {
			this._touchDisable();
		}
	},
})