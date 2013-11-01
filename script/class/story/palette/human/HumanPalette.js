var HumanPalette = enchant.Class.create(enchant.Group, {
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
		this._propertyButton = new HumanPropertyButton("man", this);
		this._propertyButton._createManPropertyButton();
		this._propertyButton._createLadyPropertyButton();
		this._propertyButton._createBoyPropertyButton();
		this._propertyButton._createGirlPropertyButton();
		this._propertyButton._addManPropertyButtonToGroup();
		this._propertyButton._addLadyPropertyButtonToGroup();
		this._propertyButton._addBoyPropertyButtonToGroup();
		this._propertyButton._addGirlPropertyButtonToGroup();
	},
	// パレットイラストのオブジェクトを生成
	_createPaletteIllust : function() {
		this._paletteIllust = new HumanPaletteIllust(this);
		this._paletteIllust._createManIllust();
		this._paletteIllust._createLadyIllust();
		this._paletteIllust._createBoyIllust();
		this._paletteIllust._createGirlIllust();
	},
	// とじるボタンのオブジェクトを生成
	_createCloseButton : function() {
		var path = STORY_PALETTECLOSEBUTTON._path;
		var width = STORY_PALETTECLOSEBUTTON._width;
		var height = STORY_PALETTECLOSEBUTTON._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + STORY_PALETTE_1._width - 120;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + STORY_PALETTE_1._height - 65;
		this._closeButton = new PaletteCloseButton("human", path, width, height, x, y, this);
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