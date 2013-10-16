var BoyIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._boyIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示される男の子画像データの生成
	_createBoyImages : function() {
		var paletteX = (APP_WIDTH - STORY_PALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_PALETTE._height) / 2;
		this._boyIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_GLAD._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, paletteX + 42 + 20, paletteY + 200, this);
		this._boyIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyIllust[0].x + 72, this._boyIllust[0].y, this);
		this._boyIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyIllust[0].x, this._boyIllust[0].y + 150, this);
		this._boyIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_GLAD._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyIllust[0].x + 72, this._boyIllust[0].y + 150, this);

		this._boyIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyIllust[3].x + 112, paletteY + 200, this);
		this._boyIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyIllust[4].x + 72, this._boyIllust[4].y, this);
		this._boyIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyIllust[4].x, this._boyIllust[4].y + 150, this);
		this._boyIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyIllust[4].x + 72, this._boyIllust[4].y + 150, this);

		this._boyIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_SAD._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyIllust[7].x + 112, paletteY + 200, this);
		this._boyIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyIllust[8].x + 72, this._boyIllust[8].y, this);
		this._boyIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_SAD._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyIllust[8].x, this._boyIllust[8].y + 150, this);
		this._boyIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_SAD._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyIllust[8].x + 72, this._boyIllust[8].y + 150, this);

		this._boyIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyIllust[11].x + 112, paletteY + 200, this);
		this._boyIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyIllust[12].x + 72, this._boyIllust[12].y, this);
		this._boyIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyIllust[12].x, this._boyIllust[12].y + 150, this);
		this._boyIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyIllust[12].x + 72, this._boyIllust[12].y + 150, this);
	},

	// 男の子画像を子ノードとしてパレットイラストグループに追加
	_addBoyImagesToGroup : function() {
		for(var i = 0; i < this._boyIllust.length; i++) {
			this.addChild(this._boyIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(path, width, height) {
		this._parent._createSelectedIllust(path, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("boy");
		this._parent._removePalette();
	},
})