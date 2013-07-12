var Put = Class.create(MySprite, {
	initialize : function(image, w, h, originX, originY, scaleX, scaleY, x, y, game) {
		MySprite.call(this, image, w, h, originX, originY, scaleX, scaleY, x, y, game);
		this.trigger	= -1;
		this.state		= "non put";
	},

	_touchEnable : function() {
		this.opacity		= 1.0;
		this.touchEnabled	= true;
	},

	_touchDisable : function() {
		this.opacity		= 0.5;
		this.touchEnabled	= false;
	},

	ontouchend : function(e) {
		this.trigger *= -1;
		if(this.trigger === 1) {
			this.state = "put";
			this.image = this.game.assets[PUT_ON];
		} else if(this.trigger === -1) {
			this.state = "non put";
			this.image = this.game.assets[PUT_OFF];
		}
	},

	onenterframe : function(e) {
		if(this.scene.start.state === "start") {
			this._touchDisable();
		} else if(this.scene.start.state === "stop") {
			this._touchEnable();
		}
	},
})