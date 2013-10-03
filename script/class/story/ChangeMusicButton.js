var ChangeMusicButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._parent = null;
	},

	// クリック時の処理
	ontouchend : function(event) {
		core.replaceScene(musicScene);
	}
})