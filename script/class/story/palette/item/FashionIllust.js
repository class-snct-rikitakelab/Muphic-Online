var FashionIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._fashionIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示されるファッション画像データの生成
	_createFashionImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_2._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_2._height) / 2;
		this._fashionIllust[0] = new ItemPaletteImage(STORY_PREVIEWOBJECT_BAGBLACK._path, STORY_PREVIEWTHUMBNAIL_BAGBLACK._path, STORY_PREVIEWOBJECT_BAGBLACK_REMOVEFOCUS._path, 31, 34, 100, 100, paletteX + 30, paletteY + 166, this);
		this._fashionIllust[1] = new ItemPaletteImage(STORY_PREVIEWOBJECT_BAGRED._path, STORY_PREVIEWTHUMBNAIL_BAGRED._path, STORY_PREVIEWOBJECT_BAGRED_REMOVEFOCUS._path, 28, 30, 100, 100, this._fashionIllust[0].x + 120, this._fashionIllust[0].y, this);
		this._fashionIllust[2] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAPBLUE._path, STORY_PREVIEWTHUMBNAIL_CAPBLUE._path, STORY_PREVIEWOBJECT_CAPBLUE_REMOVEFOCUS._path, 39, 22, 100, 100, this._fashionIllust[1].x + 120, this._fashionIllust[0].y, this);
		this._fashionIllust[3] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAPGREEN._path, STORY_PREVIEWTHUMBNAIL_CAPGREEN._path, STORY_PREVIEWOBJECT_CAPGREEN_REMOVEFOCUS._path, 38, 23, 100, 100, this._fashionIllust[2].x + 120, this._fashionIllust[0].y, this);

		this._fashionIllust[4] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAPPINK._path, STORY_PREVIEWTHUMBNAIL_CAPPINK._path, STORY_PREVIEWOBJECT_CAPPINK_REMOVEFOCUS._path, 39, 24, 100, 100, this._fashionIllust[3].x + 120, this._fashionIllust[0].y, this);
		this._fashionIllust[5] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAPSUMMER._path, STORY_PREVIEWTHUMBNAIL_CAPSUMMER._path, STORY_PREVIEWOBJECT_CAPSUMMER_REMOVEFOCUS._path, 45, 23, 100, 100, this._fashionIllust[4].x + 120, this._fashionIllust[0].y, this);
		this._fashionIllust[6] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAPYELLOW._path, STORY_PREVIEWTHUMBNAIL_CAPYELLOW._path, STORY_PREVIEWOBJECT_CAPYELLOW_REMOVEFOCUS._path, 42, 23, 100, 100, this._fashionIllust[5].x + 120, this._fashionIllust[0].y, this);
		this._fashionIllust[7] = new ItemPaletteImage(STORY_PREVIEWOBJECT_RIBBON._path, STORY_PREVIEWTHUMBNAIL_RIBBON._path, STORY_PREVIEWOBJECT_RIBBON_REMOVEFOCUS._path, 27, 23, 100, 100, this._fashionIllust[6].x + 120, this._fashionIllust[0].y, this);
	},

	// ファッション画像を子ノードとしてパレットイラストグループに追加
	_addFashionImagesToGroup : function() {
		for(var i = 0; i < this._fashionIllust.length; i++) {
			this.addChild(this._fashionIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("food");
		this._parent._removeIllust("fashion");
		this._parent._removeIllust("interior");
		this._parent._removeIllust("goods");
		this._parent._removePalette();
	},
})