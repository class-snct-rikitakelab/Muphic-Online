var NightIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._nightIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示される縮小された夜画像データの生成
	_createNightImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_3._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_3._height) / 2;
		this._nightIllust[0] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_FOREST_1._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_1._path, 690, 460, 200, 133, paletteX + 40, paletteY + 150, this);
		this._nightIllust[1] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_FOREST_2._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_2._path, 690, 460, 200, 133, paletteX + 40, paletteY + 350, this);
		this._nightIllust[2] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_RIVER_1._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_1._path, 690, 460, 200, 133, this._nightIllust[1].x + 240, paletteY + 150, this);
		this._nightIllust[3] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_RIVER_2._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_2._path, 690, 460, 200, 133, this._nightIllust[1].x + 240, paletteY + 350, this);
		this._nightIllust[4] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_TOWN_1._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_1._path, 690, 460, 200, 133, this._nightIllust[3].x + 240, paletteY + 150, this);
		this._nightIllust[5] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_TOWN_2._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_2._path, 690, 460, 200, 133, this._nightIllust[3].x + 240, paletteY + 350, this);
		this._nightIllust[6] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_HOUSE_1._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_1._path, 690, 460, 200, 133, this._nightIllust[5].x + 240, paletteY + 150, this);
		this._nightIllust[7] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_HOUSE_2._path, STORY_PREVIEWWEATHER_NIGHT._path, STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_2._path, 690, 460, 200, 133, this._nightIllust[5].x + 240, paletteY + 350, this);
	},
	// 夜画像を子ノードとしてパレットイラストグループに追加
	_addNightImagesToGroup : function() {
		for(var i = 0; i < this._nightIllust.length; i++) {
			this.addChild(this._nightIllust[i]);
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
		this._parent._removeIllust("night");
		this._parent._removePalette();
	},
})