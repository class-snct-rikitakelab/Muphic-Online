var PreviewIllustRemoveFocus = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	// マウスクリック時の処理
	ontouchend : function() {
		this._removeFromStoryScene();
		this._parent._removeFromStoryScene();
		this._parent._destroyIllust();
	},
})