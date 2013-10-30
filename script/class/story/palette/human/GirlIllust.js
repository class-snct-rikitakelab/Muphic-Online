var GirlIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._girlIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示される女の子画像データの生成
	_createGirlImages : function() {
		var paletteX = (APP_WIDTH - STORY_HUMANPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_HUMANPALETTE._height) / 2;
		this._girlIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS._path, 50, 107, paletteX + 42 + 20, paletteY + 200, this);
		this._girlIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS._path, 51, 106, this._girlIllust[0].x + 72, this._girlIllust[0].y, this);
		this._girlIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS._path, 44, 107, this._girlIllust[0].x, this._girlIllust[0].y + 150, this);
		this._girlIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS._path, 43, 107, this._girlIllust[0].x + 72, this._girlIllust[0].y + 150, this);

		this._girlIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS._path, 50, 107, this._girlIllust[3].x + 112, paletteY + 200, this);
		this._girlIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS._path, 51, 106, this._girlIllust[4].x + 72, this._girlIllust[4].y, this);
		this._girlIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS._path, 44, 107, this._girlIllust[4].x, this._girlIllust[4].y + 150, this);
		this._girlIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS._path, 43, 107, this._girlIllust[4].x + 72, this._girlIllust[4].y + 150, this);

		this._girlIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_SAD._path, STORY_PREVIEWOBJECT_GIRL_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS._path, 50, 107, this._girlIllust[7].x + 112, paletteY + 200, this);
		this._girlIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS._path, 51, 106, this._girlIllust[8].x + 72, this._girlIllust[8].y, this);
		this._girlIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS._path, 44, 107, this._girlIllust[8].x, this._girlIllust[8].y + 150, this);
		this._girlIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_SAD._path, STORY_PREVIEWOBJECT_GIRL_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS._path, 43, 107, this._girlIllust[8].x + 72, this._girlIllust[8].y + 150, this);

		this._girlIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS._path, 50, 107, this._girlIllust[11].x + 112, paletteY + 200, this);
		this._girlIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS._path, 51, 106, this._girlIllust[12].x + 72, this._girlIllust[12].y, this);
		this._girlIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS._path, 44, 107, this._girlIllust[12].x, this._girlIllust[12].y + 150, this);
		this._girlIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS._path, 43, 107, this._girlIllust[12].x + 72, this._girlIllust[12].y + 150, this);
	},

	// 女の子画像を子ノードとしてパレットイラストグループに追加
	_addGirlImagesToGroup : function() {
		for(var i = 0; i < this._girlIllust.length; i++) {
			this.addChild(this._girlIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("girl");
		this._parent._removePalette();
	},
})