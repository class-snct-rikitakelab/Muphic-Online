var PreviewIllust = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, zIndex, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._zIndex = zIndex;
		this._parent = parent;
	},

	// 物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},

	// 物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},
})