var AnimalPalette = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._paletteFrame = null;
		this._propertyButton = null;
		this._paletteIllust = null;
		this._parent = parent;
	},

	// パレットフレームのオブジェクトを生成
	_createPaletteFrame : function() {
		var path = STORY_ANIMALPALETTE._path;
		var width = STORY_ANIMALPALETTE._width;
		var height = STORY_ANIMALPALETTE._height;
		var x = (APP_WIDTH - width) / 2;
		var y = (APP_HEIGHT - height) / 2;
		this._paletteFrame = new PaletteFrame(path, width, height, x, y, this);
	},
	// 属性ボタンのオブジェクトを生成
	_createPropertyButton : function() {
		this._propertyButton = new AnimalPropertyButton("dog", this);
		this._propertyButton._createDogPropertyButton();
		this._propertyButton._createBirdPropertyButton();
		this._propertyButton._createBearPropertyButton();
		this._propertyButton._createTurtlePropertyButton();
		this._propertyButton._addDogPropertyButtonToGroup();
		this._propertyButton._addBirdPropertyButtonToGroup();
		this._propertyButton._addBearPropertyButtonToGroup();
		this._propertyButton._addTurtlePropertyButtonToGroup();
	},
	// パレットイラストのオブジェクトを生成
	_createPaletteIllust : function() {
		this._paletteIllust = new AnimalPaletteIllust(this);
		this._paletteIllust._createDogIllust();
		this._paletteIllust._createBirdIllust();
		this._paletteIllust._createBearIllust();
		this._paletteIllust._createTurtleIllust();
	},

	// パレットフレームを子ノードとしてパレットグループに追加
	_addPaletteFrameToGroup : function() {
		this.addChild(this._paletteFrame);
	},
	// 属性ボタンを子ノードとしてパレットグループに追加
	_addPropertyButtonToGroup : function() {
		this.addChild(this._propertyButton);
	},

	// パレット全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// パレット全体を物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// パレットの中にイラストを表示させる
	_addIllust : function(illustType) {
		this._paletteIllust._addIllust(illustType);
	},
	// パレットの中にイラストを表示させない
	_removeIllust : function(illustType) {
		this._paletteIllust._removeIllust(illustType);
	},

	// 選択された半透明画像のオブジェクトを生成
	_createSelectedIllust: function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
})