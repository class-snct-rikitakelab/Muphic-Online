var StartButton = enchant.Class.create(enchant.Sprite, {
	ititialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._parent = null;
	},

	// クリック時の処理
	ontouchend : function() {
		core.replaceScene(storyScene);
	},
})