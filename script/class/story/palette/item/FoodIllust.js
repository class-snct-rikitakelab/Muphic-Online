var FoodIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._foodIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示されるたべもの画像データの生成
	_createFoodImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_2._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_2._height) / 2;
		this._foodIllust[0] = new ItemPaletteImage(STORY_PREVIEWOBJECT_APPLE._path, STORY_PREVIEWTHUMBNAIL_APPLE._path, STORY_PREVIEWOBJECT_APPLE_REMOVEFOCUS._path, 30, 35, 100, 100, paletteX + 30, paletteY + 36, this);
		this._foodIllust[1] = new ItemPaletteImage(STORY_PREVIEWOBJECT_COFFEE._path, STORY_PREVIEWTHUMBNAIL_COFFEE._path, STORY_PREVIEWOBJECT_COFFEE_REMOVEFOCUS._path, 37, 32, 100, 100, this._foodIllust[0].x + 120, this._foodIllust[0].y, this);
		this._foodIllust[2] = new ItemPaletteImage(STORY_PREVIEWOBJECT_ONIGIRI._path, STORY_PREVIEWTHUMBNAIL_ONIGIRI._path, STORY_PREVIEWOBJECT_ONIGIRI_REMOVEFOCUS._path, 33, 27, 100, 100, this._foodIllust[1].x + 120, this._foodIllust[0].y, this);
		this._foodIllust[3] = new ItemPaletteImage(STORY_PREVIEWOBJECT_PATTY._path, STORY_PREVIEWTHUMBNAIL_PATTY._path, STORY_PREVIEWOBJECT_PATTY_REMOVEFOCUS._path, 48, 35, 100, 100, this._foodIllust[2].x + 120, this._foodIllust[0].y, this);

		this._foodIllust[4] = new ItemPaletteImage(STORY_PREVIEWOBJECT_PUDDING._path, STORY_PREVIEWTHUMBNAIL_PUDDING._path, STORY_PREVIEWOBJECT_PUDDING_REMOVEFOCUS._path, 45, 37, 100, 100, this._foodIllust[3].x + 120, this._foodIllust[0].y, this);
		this._foodIllust[5] = new ItemPaletteImage(STORY_PREVIEWOBJECT_FISH._path, STORY_PREVIEWTHUMBNAIL_FISH._path, STORY_PREVIEWOBJECT_FISH_REMOVEFOCUS._path, 42, 22, 100, 100, this._foodIllust[4].x + 120, this._foodIllust[0].y, this);
		this._foodIllust[6] = new ItemPaletteImage(STORY_PREVIEWOBJECT_NUT._path, STORY_PREVIEWTHUMBNAIL_NUT._path, STORY_PREVIEWOBJECT_NUT_REMOVEFOCUS._path, 27, 38, 100, 100, this._foodIllust[5].x + 120, this._foodIllust[0].y, this);
		this._foodIllust[7] = new ItemPaletteImage(STORY_PREVIEWOBJECT_DOGFOOD._path, STORY_PREVIEWTHUMBNAIL_DOGFOOD._path, STORY_PREVIEWOBJECT_DOGFOOD_REMOVEFOCUS._path, 43, 26, 100, 100, this._foodIllust[6].x + 120, this._foodIllust[0].y, this);
	},

	// たべもの画像を子ノードとしてパレットイラストグループに追加
	_addFoodImagesToGroup : function() {
		for(var i = 0; i < this._foodIllust.length; i++) {
			this.addChild(this._foodIllust[i]);
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