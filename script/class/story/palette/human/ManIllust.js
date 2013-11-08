var ManIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._manIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるお兄さん画像データの生成
	_createManImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_1._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_1._height) / 2;
		this._manIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, 48, 137, paletteX + 30 + 40, paletteY + 200, this);
		this._manIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS._path, 46, 136, this._manIllust[0].x + 90, this._manIllust[0].y, this);
		this._manIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS._path, 38, 135, this._manIllust[0].x, this._manIllust[0].y + 150, this);
		this._manIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_GLAD._path, STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS._path, 36, 135, this._manIllust[0].x + 90, this._manIllust[0].y + 150, this);

		this._manIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, 48, 137, this._manIllust[3].x + 150, paletteY + 200, this);
		this._manIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS._path, 46, 136, this._manIllust[4].x + 90, this._manIllust[4].y, this);
		this._manIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS._path, 38, 135, this._manIllust[4].x, this._manIllust[4].y + 150, this);
		this._manIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS._path, 36, 135, this._manIllust[4].x + 90, this._manIllust[4].y + 150, this);

		this._manIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_SAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, 48, 137, this._manIllust[7].x + 150, paletteY + 200, this);
		this._manIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS._path, 46, 136, this._manIllust[8].x + 90, this._manIllust[8].y, this);
		this._manIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_SAD._path, STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS._path, 38, 135, this._manIllust[8].x, this._manIllust[8].y + 150, this);
		this._manIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_SAD._path, STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS._path, 36, 135, this._manIllust[8].x + 90, this._manIllust[8].y + 150, this);

		this._manIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, 48, 137, this._manIllust[11].x + 150, paletteY + 200, this);
		this._manIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS._path, 46, 136, this._manIllust[12].x + 90, this._manIllust[12].y, this);
		this._manIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS._path, 38, 135, this._manIllust[12].x, this._manIllust[12].y + 150, this);
		this._manIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS._path, 36, 135, this._manIllust[12].x + 90, this._manIllust[12].y + 150, this);
	},

	// お兄さん画像を子ノードとしてパレットイラストグループに追加
	_addManImagesToGroup : function() {
		for(var i = 0; i < this._manIllust.length; i++) {
			this.addChild(this._manIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("man");
		this._parent._removePalette();
	},
})