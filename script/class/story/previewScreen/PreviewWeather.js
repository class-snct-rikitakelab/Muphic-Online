var PreviewWeather = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	// 画像をセット
	_setWeatherImage : function(path) {
		this.image = core.assets[path];
	},
})