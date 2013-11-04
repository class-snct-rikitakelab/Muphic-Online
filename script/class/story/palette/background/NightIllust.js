var NightIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._nightIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示される縮小された夜画像データの生成
	_createNightImages : function() {
		var paletteX = (APP_WIDTH - STORY_BACKGROUNDPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_BACKGROUNDPALETTE._height) / 2;
		this._nightIllust[0] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_FOREST1._path, );
		this._nightIllust[1] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_FOREST2._path, );
		this._nightIllust[2] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_RIVER1._path, );
		this._nightIllust[3] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_RIVER2._path, );
		this._nightIllust[4] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_TOWN1._path, );
		this._nightIllust[5] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_TOWN2._path, );
		this._nightIllust[6] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_HOUSE1._path, );
		this._nightIllust[7] = new PaletteImage(STORY_PREVIEWBACKGROUND_NIGHT_HOUSE2._path, );
	},
	// 夜画像を子ノードとしてパレットイラストグループに追加
	_addNightImagesToGroup : function() {
		for(var i = 0; i < this._nightIllust.length; i++) {
			this.addChild(this._nightIllust[i]);
		}
	},
	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("night");
		this._parent._removePalette();
	},
})