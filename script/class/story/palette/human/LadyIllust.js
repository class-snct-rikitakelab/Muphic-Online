var LadyIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._ladyIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるお姉さん画像データの生成
	_createLadyImages : function() {
		var paletteX = (APP_WIDTH - STORY_HUMANPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_HUMANPALETTE._height) / 2;
		this._ladyIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_GLAD._path, STORY_PREVIEWOBJECT_LADY_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS._path, 48, 125, paletteX + 42 + 20, paletteY + 200, this);
		this._ladyIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS._path, 45, 124, this._ladyIllust[0].x + 72, this._ladyIllust[0].y, this);
		this._ladyIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_LADY_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[0].x, this._ladyIllust[0].y + 150, this);
		this._ladyIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_GLAD._path, STORY_PREVIEWOBJECT_LADY_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[0].x + 72, this._ladyIllust[0].y + 150, this);

		this._ladyIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS._path, 48, 125, this._ladyIllust[3].x + 112, paletteY + 200, this);
		this._ladyIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS._path, 45, 124, this._ladyIllust[4].x + 72, this._ladyIllust[4].y, this);
		this._ladyIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[4].x, this._ladyIllust[4].y + 150, this);
		this._ladyIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[4].x + 72, this._ladyIllust[4].y + 150, this);

		this._ladyIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_SAD._path, STORY_PREVIEWOBJECT_LADY_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS._path, 48, 125, this._ladyIllust[7].x + 112, paletteY + 200, this);
		this._ladyIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS._path, 45, 124, this._ladyIllust[8].x + 72, this._ladyIllust[8].y, this);
		this._ladyIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_SAD._path, STORY_PREVIEWOBJECT_LADY_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[8].x, this._ladyIllust[8].y + 150, this);
		this._ladyIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_SAD._path, STORY_PREVIEWOBJECT_LADY_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[8].x + 72, this._ladyIllust[8].y + 150, this);

		this._ladyIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS._path, 48, 125, this._ladyIllust[11].x + 112, paletteY + 200, this);
		this._ladyIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS._path, 45, 124, this._ladyIllust[12].x + 72, this._ladyIllust[12].y, this);
		this._ladyIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[12].x, this._ladyIllust[12].y + 150, this);
		this._ladyIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS._path, 34, 127, this._ladyIllust[12].x + 72, this._ladyIllust[12].y + 150, this);
	},

	// お姉さん画像を子ノードとしてパレットイラストグループに追加
	_addLadyImagesToGroup : function() {
		for(var i = 0; i < this._ladyIllust.length; i++) {
			this.addChild(this._ladyIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("lady");
		this._parent._removePalette();
	},
})