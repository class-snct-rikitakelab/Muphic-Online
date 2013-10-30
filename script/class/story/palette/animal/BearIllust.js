var BearIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._bearIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるクマ画像データの生成
	_createBearImages : function() {
		var paletteX = (APP_WIDTH - STORY_ANIMALPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_ANIMALPALETTE._height) / 2;
		this._bearIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_FRONT_GLAD._path, STORY_PREVIEWOBJECT_BEAR_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS._path, 52, 107, paletteX + 30 + 40, paletteY + 200, this);
		this._bearIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_BACK._path, STORY_PREVIEWOBJECT_BEAR_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS._path, 49, 106, this._bearIllust[0].x + 90, this._bearIllust[0].y, this);
		this._bearIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS._path, 39, 107, this._bearIllust[0].x, this._bearIllust[0].y + 150, this);
		this._bearIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_LEFT_GLAD._path, STORY_PREVIEWOBJECT_BEAR_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS._path, 39, 107, this._bearIllust[0].x + 90, this._bearIllust[0].y + 150, this);

		this._bearIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_BEAR_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS._path, 52, 107, this._bearIllust[3].x + 150, paletteY + 200, this);
		this._bearIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_BACK._path, STORY_PREVIEWOBJECT_BEAR_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS._path, 49, 106, this._bearIllust[4].x + 90, this._bearIllust[4].y, this);
		this._bearIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS._path, 39, 107, this._bearIllust[4].x, this._bearIllust[4].y + 150, this);
		this._bearIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_BEAR_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS._path, 39, 107, this._bearIllust[4].x + 90, this._bearIllust[4].y + 150, this);

		this._bearIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_FRONT_SAD._path, STORY_PREVIEWOBJECT_BEAR_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS._path, 52, 107, this._bearIllust[7].x + 150, paletteY + 200, this);
		this._bearIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_BACK._path, STORY_PREVIEWOBJECT_BEAR_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS._path, 49, 106, this._bearIllust[8].x + 90, this._bearIllust[8].y, this);
		this._bearIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_RIGHT_SAD._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS._path, 39, 107, this._bearIllust[8].x, this._bearIllust[8].y + 150, this);
		this._bearIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_LEFT_SAD._path, STORY_PREVIEWOBJECT_BEAR_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS._path, 39, 107, this._bearIllust[8].x + 90, this._bearIllust[8].y + 150, this);

		this._bearIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_BEAR_FRONT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS._path, 52, 107, this._bearIllust[11].x + 150, paletteY + 200, this);
		this._bearIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_BACK._path, STORY_PREVIEWOBJECT_BEAR_BACK_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS._path, 49, 106, this._bearIllust[12].x + 90, this._bearIllust[12].y, this);
		this._bearIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS._path, 39, 107, this._bearIllust[12].x, this._bearIllust[12].y + 150, this);
		this._bearIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_BEAR_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_BEAR_LEFT_SELECTFOCUS._path, STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS._path, 39, 107, this._bearIllust[12].x + 90, this._bearIllust[12].y + 150, this);
	},

	// クマ画像を子ノードとしてパレットイラストグループに追加
	_addBearImagesToGroup : function() {
		for(var i = 0; i < this._bearIllust.length; i++) {
			this.addChild(this._bearIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("bear");
		this._parent._removePalette();
	},
})