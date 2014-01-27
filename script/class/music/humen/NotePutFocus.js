var NotePutFocus = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		this._setOpacity(0.5);
		this._setTouchEnabled(false);
	},
})