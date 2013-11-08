var ScreenBackground = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	//　暗い色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_BACKGROUND_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_BACKGROUND._path];
		}
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