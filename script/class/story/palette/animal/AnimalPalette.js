var AnimalPalette = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._paletteFrame = null;
		this._propertyButton = null;
		this._paletteIllust = null;
		this._closeButton = null;
		this._parent = parent;
	},

	// パレットフレームのオブジェクトを生成
	_createPaletteFrame : function() {
		var path = STORY_PALETTE_1._path;
		var width = STORY_PALETTE_1._width;
		var height = STORY_PALETTE_1._height;
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
	// とじるボタンのオブジェクトを生成
	_createCloseButton : function() {
		var path = STORY_PALETTECLOSEBUTTON_OFF._path;
		var width = STORY_PALETTECLOSEBUTTON_OFF._width;
		var height = STORY_PALETTECLOSEBUTTON_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + STORY_PALETTE_1._width - 120;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + STORY_PALETTE_1._height - 65;
		this._closeButton = new PaletteCloseButton("animal", path, width, height, x, y, this);
	},

	// パレットフレームを子ノードとしてパレットグループに追加
	_addPaletteFrameToGroup : function() {
		this.addChild(this._paletteFrame);
	},
	// 属性ボタンを子ノードとしてパレットグループに追加
	_addPropertyButtonToGroup : function() {
		this.addChild(this._propertyButton);
	},
	// とじるボタンを子ノードとしてパレットグループに追加
	_addCloseButtonToGroup : function() {
		this.addChild(this._closeButton);
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

	// 画面全体の背景を暗くしない
	_setNotDarkScreenBackground : function() {
		this._parent._setNotDarkScreenBackground();
	},
	// 作曲画面への遷移ボタンを押せる状態に
	_setCanPushMusicButton : function() {
		this._parent._setCanPushMusicButton();
	},
	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._parent._setCanPushAllIllustButton();
	},
	// 削除ボタンを押せる状態に
	_setCanPushRemoveButton : function() {
		this._parent._setCanPushRemoveButton();
	},
})