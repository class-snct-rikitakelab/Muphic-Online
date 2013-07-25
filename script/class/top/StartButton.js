var StartButton = enchant.Class.create(enchant.Sprite, {
	ititialize : function(width, height) {
		enchant.Sprite.call(this, width, height);

		this._parent = null;
	},

	ontouchend : function() {
		core.replaceScene(storyScene);
	},
})