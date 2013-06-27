var PreviewBackground = Class.create (MySprite, {
	initialize : function(image, w, h, originX, originY, scaleX, scaleY, x, y, game) {
		MySprite.call(this, image, w, h, originX, originY, scaleX, scaleY, x, y, game);
	},
});