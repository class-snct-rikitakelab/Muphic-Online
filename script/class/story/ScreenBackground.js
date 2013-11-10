var ScreenBackground = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	//　暗い色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_BACKGROUND_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_BACKGROUND._path];
		}
	},
})