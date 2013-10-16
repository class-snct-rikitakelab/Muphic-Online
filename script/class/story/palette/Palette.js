var Palette = enchant.Class.create(enchant.Group, {
	initialize : function(parent) {
		enchant.Group.call(this);
		this._paletteFrame = null;
		this._propertyButton = null;
		this._paletteIllust = null;
		this._parent = parent;
	},

	// パレットフレームのオブジェクトを生成
	_createPaletteFrame : function() {
		var path = STORY_PALETTE._path;
		var width = STORY_PALETTE._width;
		var height = STORY_PALETTE._height;
		var x = (APP_WIDTH - width) / 2;
		var y = (APP_HEIGHT - height) / 2;
		this._paletteFrame = new PaletteFrame(path, width, height, x, y, this);
	},
	// 属性ボタンのオブジェクトを生成
	_createPropertyButton : function() {
		this._propertyButton = new PropertyButton("man", this);
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
		this._paletteIllust = new PaletteIllust(this);
		this._paletteIllust._createManIllust();
		this._paletteIllust._createLadyIllust();
		this._paletteIllust._createBoyIllust();
		this._paletteIllust._createGirlIllust();
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
	_createSelectedIllust: function(path, width, height) {
		this._parent._createSelectedIllust(path, width, height);
	},
})