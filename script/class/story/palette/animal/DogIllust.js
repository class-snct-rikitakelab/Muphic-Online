var DogIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._dogIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるイヌ画像データの生成
	_createDogImages : function() {
		var paletteX = (APP_WIDTH - STORY_ANIMALPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_ANIMALPALETTE._height) / 2;
		this._dogIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_FRONT_GLAD._path, STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS._path, 46, 73, paletteX + 30 + 40, paletteY + 200, this);
		this._dogIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_BACK._path, STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS._path, 49, 76, this._dogIllust[0].x + 90, this._dogIllust[0].y, this);
		this._dogIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS._path, 78, 75, this._dogIllust[0].x - 15, this._dogIllust[0].y + 150, this);
		this._dogIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_LEFT_GLAD._path, STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS._path, 80, 75, this._dogIllust[0].x + 75, this._dogIllust[0].y + 150, this);

		this._dogIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS._path, 46, 73, this._dogIllust[3].x + 165, paletteY + 200, this);
		this._dogIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_BACK._path, STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS._path, 49, 76, this._dogIllust[4].x + 90, this._dogIllust[4].y, this);
		this._dogIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS._path, 78, 75, this._dogIllust[4].x - 15, this._dogIllust[4].y + 150, this);
		this._dogIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS._path, 80, 75, this._dogIllust[4].x + 75, this._dogIllust[4].y + 150, this);

		this._dogIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_FRONT_SAD._path, STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS._path, 46, 73, this._dogIllust[7].x + 165, paletteY + 200, this);
		this._dogIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_BACK._path, STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS._path, 49, 76, this._dogIllust[8].x + 90, this._dogIllust[8].y, this);
		this._dogIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_RIGHT_SAD._path, STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS._path, 78, 75, this._dogIllust[8].x - 15, this._dogIllust[8].y + 150, this);
		this._dogIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_LEFT_SAD._path, STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS._path, 80, 75, this._dogIllust[8].x + 75, this._dogIllust[8].y + 150, this);

		this._dogIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS._path, 46, 73, this._dogIllust[11].x + 165, paletteY + 200, this);
		this._dogIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_BACK._path, STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS._path, 49, 76, this._dogIllust[12].x + 90, this._dogIllust[12].y, this);
		this._dogIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS._path, 78, 75, this._dogIllust[12].x - 15, this._dogIllust[12].y + 150, this);
		this._dogIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_DOG_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS._path, 80, 75, this._dogIllust[12].x + 75, this._dogIllust[12].y + 150, this);
	},

	// イヌ画像を子ノードとしてパレットイラストグループに追加
	_addDogImagesToGroup : function() {
		for(var i = 0; i < this._dogIllust.length; i++) {
			this.addChild(this._dogIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("dog");
		this._parent._removePalette();
	},
})