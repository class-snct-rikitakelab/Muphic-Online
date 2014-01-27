var PreviewBackground = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	// 画像をセット
	_setBackgroundImage : function(path) {
		this._path = path;
		this.image = core.assets[path];
	},
})