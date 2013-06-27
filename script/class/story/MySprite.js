var MySprite = Class.create (Sprite, {
	initialize : function(image, w, h, originX, originY, scaleX, scaleY, x, y, game) {
		Sprite.call(this, w, h);
		this.image = game.assets[image];
		this.w = w;
		this.h = h;
		this.originX = originX;
		this.originY = originY;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
		this.x = x;
		this.y = y;
	},

	setGame : function(game) {
		this.game = game;
	},

	setScene : function(scene) {
		this.scene = scene;
	},

	addToScene : function() {
		this.scene.addChild(this);
	},

	removeFromScene : function() {
		this.scene.removeChild(this);
	},
});