var CloudIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._cloudIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示される縮小された雲り画像データの生成
	_createCloudImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_3._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_3._height) / 2;
		this._cloudIllust[0] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_FOREST_1._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_1._path, 690, 460, 200, 133, paletteX + 40, paletteY + 150, this);
		this._cloudIllust[1] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_FOREST_2._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_2._path, 690, 460, 200, 133, paletteX + 40, paletteY + 350, this);
		this._cloudIllust[2] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_RIVER_1._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_1._path, 690, 460, 200, 133, this._cloudIllust[1].x + 240, paletteY + 150, this);
		this._cloudIllust[3] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_RIVER_2._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_2._path, 690, 460, 200, 133, this._cloudIllust[1].x + 240, paletteY + 350, this);
		this._cloudIllust[4] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_TOWN_1._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_1._path, 690, 460, 200, 133, this._cloudIllust[3].x + 240, paletteY + 150, this);
		this._cloudIllust[5] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_TOWN_2._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_2._path, 690, 460, 200, 133, this._cloudIllust[3].x + 240, paletteY + 350, this);
		this._cloudIllust[6] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_HOUSE_1._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_1._path, 690, 460, 200, 133, this._cloudIllust[5].x + 240, paletteY + 150, this);
		this._cloudIllust[7] = new BackgroundPaletteImage(STORY_PREVIEWBACKGROUND_HOUSE_2._path, STORY_PREVIEWWEATHER_CLOUD._path, STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_2._path, 690, 460, 200, 133, this._cloudIllust[5].x + 240, paletteY + 350, this);
	},
	// 雲画像を子ノードとしてパレットイラストグループに追加
	_addCloudImagesToGroup : function() {
		for(var i = 0; i < this._cloudIllust.length; i++) {
			this.addChild(this._cloudIllust[i]);
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
	// 保存ボタンを押せる状態に
	_setCanPushSaveButton : function() {
		this._parent._setCanPushSaveButton();
	},
	// 読み込みボタンを押せる状態に
	_setCanPushLoadButton : function() {
		this._parent._setCanPushLoadButton();
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
		this._parent._removeIllust("cloud");
		this._parent._removePalette();
	},
})