var GoodsIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._goodsIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示されるグッズ画像データの生成
	_createGoodsImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_2._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_2._height) / 2;
		this._goodsIllust[0] = new ItemPaletteImage(STORY_PREVIEWOBJECT_BUTTERFLYNET._path, STORY_PREVIEWTHUMBNAIL_BUTTERFLYNET._path, STORY_PREVIEWOBJECT_BUTTERFLYNET_REMOVEFOCUS._path, 58, 54, 100, 100, paletteX + 30, paletteY + 426, this);
		this._goodsIllust[1] = new ItemPaletteImage(STORY_PREVIEWOBJECT_INSECTCAGE._path, STORY_PREVIEWTHUMBNAIL_INSECTCAGE._path, STORY_PREVIEWOBJECT_INSECTCAGE_REMOVEFOCUS._path, 28, 28, 100, 100, this._goodsIllust[0].x + 120, this._goodsIllust[0].y, this);
		this._goodsIllust[2] = new ItemPaletteImage(STORY_PREVIEWOBJECT_BEETLE._path, STORY_PREVIEWTHUMBNAIL_BEETLE._path, STORY_PREVIEWOBJECT_BEETLE_REMOVEFOCUS._path, 15, 27, 100, 100, this._goodsIllust[1].x + 120, this._goodsIllust[0].y, this);
		this._goodsIllust[3] = new ItemPaletteImage(STORY_PREVIEWOBJECT_RABBITDOLL._path, STORY_PREVIEWTHUMBNAIL_RABBITDOLL._path, STORY_PREVIEWOBJECT_RABBITDOLL_REMOVEFOCUS._path, 38, 41, 100, 100, this._goodsIllust[2].x + 120, this._goodsIllust[0].y, this);

		this._goodsIllust[4] = new ItemPaletteImage(STORY_PREVIEWOBJECT_TRUMPET._path, STORY_PREVIEWTHUMBNAIL_TRUMPET._path, STORY_PREVIEWOBJECT_TRUMPET_REMOVEFOCUS._path, 39, 27, 100, 100, this._goodsIllust[3].x + 120, this._goodsIllust[0].y, this);
		this._goodsIllust[5] = new ItemPaletteImage(STORY_PREVIEWOBJECT_SOCCERBALL._path, STORY_PREVIEWTHUMBNAIL_SOCCERBALL._path, STORY_PREVIEWOBJECT_SOCCERBALL_REMOVEFOCUS._path, 30, 31, 100, 100, this._goodsIllust[4].x + 120, this._goodsIllust[0].y, this);
		this._goodsIllust[6] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CELLPHONE._path, STORY_PREVIEWTHUMBNAIL_CELLPHONE._path, STORY_PREVIEWOBJECT_CELLPHONE_REMOVEFOCUS._path, 22, 36, 100, 100, this._goodsIllust[5].x + 120, this._goodsIllust[0].y, this);
		this._goodsIllust[7] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CAR._path, STORY_PREVIEWTHUMBNAIL_CAR._path, STORY_PREVIEWOBJECT_CAR_REMOVEFOCUS._path, 153, 113, 100, 100, this._goodsIllust[6].x + 120, this._goodsIllust[0].y, this);
	},

	// グッズ画像を子ノードとしてパレットイラストグループに追加
	_addGoodsImagesToGroup : function() {
		for(var i = 0; i < this._goodsIllust.length; i++) {
			this.addChild(this._goodsIllust[i]);
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