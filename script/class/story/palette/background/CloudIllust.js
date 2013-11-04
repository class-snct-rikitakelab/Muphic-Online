var CloudIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._cloudIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示される縮小された雲画像データの生成
	_createCloudImages : function() {
		var paletteX = (APP_WIDTH - STORY_BACKGROUNDPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_BACKGROUNDPALETTE._height) / 2;
		this._cloudIllust[0] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_FOREST1._path, );
		this._cloudIllust[1] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_FOREST2._path, );
		this._cloudIllust[2] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_RIVER1._path, );
		this._cloudIllust[3] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_RIVER2._path, );
		this._cloudIllust[4] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_TOWN1._path, );
		this._cloudIllust[5] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_TOWN2._path, );
		this._cloudIllust[6] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_HOUSE1._path, );
		this._cloudIllust[7] = new PaletteImage(STORY_PREVIEWBACKGROUND_CLOUD_HOUSE2._path, );
	},
	// 雲画像を子ノードとしてパレットイラストグループに追加
	_addCloudImagesToGroup : function() {
		for(var i = 0; i < this._cloudIllust.length; i++) {
			this.addChild(this._cloudIllust[i]);
		}
	},
	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("cloud");
		this._parent._removePalette();
	},
})