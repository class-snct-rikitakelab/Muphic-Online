var TurtleIllust = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._turtleIllust = new Array(16);
		this._parent = parent;
	},

	// パレットに表示されるカメ画像データの生成
	_createTurtleImages : function() {
		var paletteX = (APP_WIDTH - STORY_ANIMALPALETTE._width) / 2;
		var paletteY = (APP_HEIGHT - STORY_ANIMALPALETTE._height) / 2;
		this._turtleIllust[0] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_FRONT_GLAD._path, STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS._path, 56, 49, paletteX + 30 + 40, paletteY + 200, this);
		this._turtleIllust[1] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_BACK._path, STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS._path, 53, 48, this._turtleIllust[0].x + 90, this._turtleIllust[0].y, this);
		this._turtleIllust[2] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS._path, 74, 41, this._turtleIllust[0].x - 10, this._turtleIllust[0].y + 150, this);
		this._turtleIllust[3] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_LEFT_GLAD._path, STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS._path, 75, 41, this._turtleIllust[0].x + 85, this._turtleIllust[0].y + 150, this);

		this._turtleIllust[4] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS._path, 56, 49, this._turtleIllust[3].x + 150, paletteY + 200, this);
		this._turtleIllust[5] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_BACK._path, STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS._path, 53, 48, this._turtleIllust[4].x + 90, this._turtleIllust[4].y, this);
		this._turtleIllust[6] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS._path, 74, 41, this._turtleIllust[4].x - 10, this._turtleIllust[4].y + 150, this);
		this._turtleIllust[7] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS._path, 75, 41, this._turtleIllust[4].x + 85, this._turtleIllust[4].y + 150, this);

		this._turtleIllust[8] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_FRONT_SAD._path, STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS._path, 56, 49, this._turtleIllust[7].x + 160, paletteY + 200, this);
		this._turtleIllust[9] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_BACK._path, STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS._path, 53, 48, this._turtleIllust[8].x + 90, this._turtleIllust[8].y, this);
		this._turtleIllust[10] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_RIGHT_SAD._path, STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS._path, 74, 41, this._turtleIllust[8].x - 10, this._turtleIllust[8].y + 150, this);
		this._turtleIllust[11] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_LEFT_SAD._path, STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS._path, 75, 41, this._turtleIllust[8].x + 85, this._turtleIllust[8].y + 150, this);

		this._turtleIllust[12] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS._path, 56, 49, this._turtleIllust[11].x + 150, paletteY + 200, this);
		this._turtleIllust[13] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_BACK._path, STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS._path, 53, 48, this._turtleIllust[12].x + 90, this._turtleIllust[12].y, this);
		this._turtleIllust[14] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS._path, 74, 41, this._turtleIllust[12].x - 10, this._turtleIllust[12].y + 150, this);
		this._turtleIllust[15] = new PaletteImage(STORY_PREVIEWOBJECT_TURTLE_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS._path, 75, 41, this._turtleIllust[12].x + 85, this._turtleIllust[12].y + 150, this);
	},

	// カメ画像を子ノードとしてパレットイラストグループに追加
	_addTurtleImagesToGroup : function() {
		for(var i = 0; i < this._turtleIllust.length; i++) {
			this.addChild(this._turtleIllust[i]);
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeIllust("turtle");
		this._parent._removePalette();
	},
})