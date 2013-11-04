var SunnyIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._sunnyIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示される縮小された晴画像データの生成
	_createSunnyImages : function() {
		var paletteX = (APP_WIDTH - STORY_BACKGROUNDPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_BACKGROUNDPALETTE._height) / 2;
		this._sunnyIllust[0] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_FOREST1._path, );
		this._sunnyIllust[1] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_FOREST2._path, );
		this._sunnyIllust[2] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_RIVER1._path, );
		this._sunnyIllust[3] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_RIVER2._path, );
		this._sunnyIllust[4] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_TOWN1._path, );
		this._sunnyIllust[5] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_TOWN2._path, );
		this._sunnyIllust[6] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_HOUSE1._path, );
		this._sunnyIllust[7] = new PaletteImage(STORY_PREVIEWBACKGROUND_SUNNY_HOUSE2._path, );
	},
	// 晴画像を子ノードとしてパレットイラストグループに追加
	_addSunnyImagesToGroup : function() {
		for(var i = 0; i < this._sunnyIllust.length; i++) {
			this.addChild(this._sunnyIllust[i]);
		}
	},
	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("sunny");
		this._parent._removePalette();
	},
})