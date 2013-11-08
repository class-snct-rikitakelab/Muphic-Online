var BackgroundPaletteIllust =  enchant.Class.create({
	initialize : function(parent) {
		this._sunnyIllust = null;
		this._cloudIllust = null;
		this._nightIllust = null;
		this._parent = parent;
	},

	// 晴れイラスト全体のオブジェクトを生成
	_createSunnyIllust : function() {
		this._sunnyIllust = new SunnyIllust(this);
		this._sunnyIllust._createSunnyImages();
		this._sunnyIllust._addSunnyImagesToGroup();
	},
	// 曇りイラスト全体のオブジェクトを生成
	_createCloudIllust : function() {
		this._cloudIllust = new CloudIllust(this);
		this._cloudIllust._createCloudImages();
		this._cloudIllust._addCloudImagesToGroup();
	},
	// 夜イラスト全体のオブジェクトを生成
	_createNightIllust : function() {
		this._nightIllust = new NightIllust(this);
		this._nightIllust._createNightImages();
		this._nightIllust._addNightImagesToGroup();
	},

	// 晴れイラスト全体を物語作成画面へ加える
	_addSunnyIllustToStoryScene : function() {
		storyScene.addChild(this._sunnyIllust);
	},
	// 曇りイラスト全体を物語作成画面へ加える
	_addCloudIllustToStoryScene : function() {
		storyScene.addChild(this._cloudIllust);
	},
	// 夜イラスト全体を物語作成画面へ加える
	_addNightIllustToStoryScene : function() {
		storyScene.addChild(this._nightIllust);
	},

	// 晴れイラスト全体を物語作成画面から削除する
	_removeSunnyIllustFromStoryScene : function() {
		storyScene.removeChild(this._sunnyIllust);
	},
	// 曇りイラスト全体を物語作成画面から削除する
	_removeCloudIllustFromStoryScene : function() {
		storyScene.removeChild(this._cloudIllust);
	},
	// 夜イラスト全体を物語作成画面から削除する
	_removeNightIllustFromStoryScene : function() {
		storyScene.removeChild(this._nightIllust);
	},

	// パレットの中にイラストを表示する
	_addIllust : function(illustType) {
		switch(illustType) {
			case "sunny":
				this._addSunnyIllustToStoryScene();
				break;
			case "cloud":
				this._addCloudIllustToStoryScene();
				break;
			case "night":
				this._addNightIllustToStoryScene();
				break;
		}
	},
	// パレットの中にイラストを表示しない
	_removeIllust : function(illustType) {
		switch(illustType) {
			case "sunny":
				this._removeSunnyIllustFromStoryScene();
				break;
			case "cloud":
				this._removeCloudIllustFromStoryScene();
				break;
			case "night":
				this._removeNightIllustFromStoryScene();
				break;
		}
	},

	// 画面全体の背景を暗くしない
	_setNotDarkScreenBackground : function() {
		this._parent._setNotDarkScreenBackground();
	},
	// 作曲画面への遷移ボタンを押せる状態に
	_setCanPushMusicButton : function() {
		this._parent._setCanPushMusicButton();
	},
	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._parent._setCanPushAllIllustButton();
	},
	// 削除ボタンを押せる状態に
	_setCanPushRemoveButton : function() {
		this._parent._setCanPushRemoveButton();
	},
	// 背景画像をセット
	_setBackgroundImage : function(path) {
		this._parent._setBackgroundImage(path);
	},
	// 天気画像をセット
	_setWeatherImage : function(path) {
		this._parent._setWeatherImage(path);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeFromStoryScene();
	},
})