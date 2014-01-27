var InteriorIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._interiorIllust = new Array(8);
		this._parent = parent;
	},

	// パレットに表示されるインテリア画像データの生成
	_createInteriorImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_2._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_2._height) / 2;
		this._interiorIllust[0] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CHAIRLEFT._path, STORY_PREVIEWTHUMBNAIL_CHAIRLEFT._path, STORY_PREVIEWOBJECT_CHAIRLEFT_REMOVEFOCUS._path, 48, 77, 100, 100, paletteX + 30, paletteY + 296, this);
		this._interiorIllust[1] = new ItemPaletteImage(STORY_PREVIEWOBJECT_TABLE._path, STORY_PREVIEWTHUMBNAIL_TABLE._path, STORY_PREVIEWOBJECT_TABLE_REMOVEFOCUS._path, 146, 73, 100, 100, this._interiorIllust[0].x + 120, this._interiorIllust[0].y, this);
		this._interiorIllust[2] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CHAIRRIGHT._path, STORY_PREVIEWTHUMBNAIL_CHAIRRIGHT._path, STORY_PREVIEWOBJECT_CHAIRRIGHT_REMOVEFOCUS._path, 47, 75, 100, 100, this._interiorIllust[1].x + 120, this._interiorIllust[0].y, this);
		this._interiorIllust[3] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CLOCK._path, STORY_PREVIEWTHUMBNAIL_CLOCK._path, STORY_PREVIEWOBJECT_CLOCK_REMOVEFOCUS._path, 45, 42, 100, 100, this._interiorIllust[2].x + 120, this._interiorIllust[0].y, this);

		this._interiorIllust[4] = new ItemPaletteImage(STORY_PREVIEWOBJECT_CHEST._path, STORY_PREVIEWTHUMBNAIL_CHEST._path, STORY_PREVIEWOBJECT_CHEST_REMOVEFOCUS._path, 60, 115, 100, 100, this._interiorIllust[3].x + 120, this._interiorIllust[0].y, this);
		this._interiorIllust[5] = new ItemPaletteImage(STORY_PREVIEWOBJECT_BOOKSHELF._path, STORY_PREVIEWTHUMBNAIL_BOOKSHELF._path, STORY_PREVIEWOBJECT_BOOKSHELF_REMOVEFOCUS._path, 56, 103, 100, 100, this._interiorIllust[4].x + 120, this._interiorIllust[0].y, this);
		this._interiorIllust[6] = new ItemPaletteImage(STORY_PREVIEWOBJECT_DRESSER._path, STORY_PREVIEWTHUMBNAIL_DRESSER._path, STORY_PREVIEWOBJECT_DRESSER_REMOVEFOCUS._path, 42, 99, 100, 100, this._interiorIllust[5].x + 120, this._interiorIllust[0].y, this);
		this._interiorIllust[7] = new ItemPaletteImage(STORY_PREVIEWOBJECT_TELEVISION._path, STORY_PREVIEWTHUMBNAIL_TELEVISION._path, STORY_PREVIEWOBJECT_TELEVISION_REMOVEFOCUS._path, 56, 71, 100, 100, this._interiorIllust[6].x + 120, this._interiorIllust[0].y, this);
	},

	// インテリア画像を子ノードとしてパレットイラストグループに追加
	_addInteriorImagesToGroup : function() {
		for(var i = 0; i < this._interiorIllust.length; i++) {
			this.addChild(this._interiorIllust[i]);
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