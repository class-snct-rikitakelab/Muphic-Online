var BirdIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._birdIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるトリ画像データの生成
	_createBirdImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE_1._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE_1._height) / 2;
		this._birdIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_FRONT_GLAD._path, STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS._path, 43, 48, paletteX + 30 + 45, paletteY + 200, this);
		this._birdIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_BACK._path, STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS._path, 44, 46, this._birdIllust[0].x + 90, this._birdIllust[0].y, this);
		this._birdIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS._path, 30, 44, this._birdIllust[0].x + 10, this._birdIllust[0].y + 150, this);
		this._birdIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_LEFT_GLAD._path, STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS._path, 32, 44, this._birdIllust[0].x + 95, this._birdIllust[0].y + 150, this);

		this._birdIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS._path, 43, 48, this._birdIllust[1].x + 145, paletteY + 200, this);
		this._birdIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_BACK._path, STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS._path, 44, 46, this._birdIllust[4].x + 90, this._birdIllust[4].y, this);
		this._birdIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS._path, 30, 44, this._birdIllust[4].x + 10, this._birdIllust[4].y + 150, this);
		this._birdIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS._path, 32, 44, this._birdIllust[4].x + 95, this._birdIllust[4].y + 150, this);

		this._birdIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_FRONT_SAD._path, STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS._path, 43, 48, this._birdIllust[7].x + 145, paletteY + 200, this);
		this._birdIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_BACK._path, STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS._path, 44, 46, this._birdIllust[8].x + 90, this._birdIllust[8].y, this);
		this._birdIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_RIGHT_SAD._path, STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS._path, 30, 44, this._birdIllust[8].x + 10, this._birdIllust[8].y + 150, this);
		this._birdIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_LEFT_SAD._path, STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS._path, 32, 44, this._birdIllust[8].x + 95, this._birdIllust[8].y + 150, this);

		this._birdIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS._path, 43, 48, this._birdIllust[11].x + 145, paletteY + 200, this);
		this._birdIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_BACK._path, STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS._path, 44, 46, this._birdIllust[12].x + 90, this._birdIllust[12].y, this);
		this._birdIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS._path, 30, 44, this._birdIllust[12].x + 10, this._birdIllust[12].y + 150, this);
		this._birdIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_BIRD_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS._path, 32, 44, this._birdIllust[12].x + 95, this._birdIllust[12].y + 150, this);
	},

	// トリ画像を子ノードとしてパレットイラストグループに追加
	_addBirdImagesToGroup : function() {
		for(var i = 0; i < this._birdIllust.length; i++) {
			this.addChild(this._birdIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("bird");
		this._parent._removePalette();
	},
})