var AnimalPropertyButton = enchant.Class.create(enchant.Group, {
	initialize : function(firstSelectButton, parent) {
		enchant.Group.call(this);
		this._dogPropertyButton = null;
		this._birdPropertyButton = null;
		this._bearPropertyButton = null;
		this._turtlePropertyButton = null;
		this._pushButton = firstSelectButton;
		this._parent = parent;
	},

	// イヌ属性ボタンのオブジェクトを生成
	_createDogPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_DOG_ON._path;
		var width = STORY_PALETTEPROPERTY_DOG_ON._width;
		var height = STORY_PALETTEPROPERTY_DOG_ON._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + 301;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + 30;
		this._dogPropertyButton = new DogPropertyButton(path, width, height, x, y, this);
	},
	// トリ属性ボタンのオブジェクトを生成
	_createBirdPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_BIRD_OFF._path;
		var width = STORY_PALETTEPROPERTY_BIRD_OFF._width;
		var height = STORY_PALETTEPROPERTY_BIRD_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + 301 + 107;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + 30;
		this._birdPropertyButton = new BirdPropertyButton(path, width, height, x, y, this);
	},
	// クマ属性ボタンのオブジェクトを生成
	_createBearPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_BEAR_OFF._path;
		var width = STORY_PALETTEPROPERTY_BEAR_OFF._width;
		var height = STORY_PALETTEPROPERTY_BEAR_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + 301 + 214;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + 30;
		this._bearPropertyButton = new BearPropertyButton(path, width, height, x, y, this);
	},
	// カメ属性ボタンのオブジェクトを生成
	_createTurtlePropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_TURTLE_OFF._path;
		var width = STORY_PALETTEPROPERTY_TURTLE_OFF._width;
		var height = STORY_PALETTEPROPERTY_TURTLE_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_1._width) / 2 + 301 + 321;
		var y = (APP_HEIGHT - STORY_PALETTE_1._height) / 2 + 30;
		this._turtlePropertyButton = new TurtlePropertyButton(path, width, height, x, y, this);
	},

	// イヌ属性ボタンを子ノードとして属性ボタングループに追加
	_addDogPropertyButtonToGroup : function() {
		this.addChild(this._dogPropertyButton);
	},
	// トリ属性ボタンを子ノードとして属性ボタングループに追加
	_addBirdPropertyButtonToGroup : function() {
		this.addChild(this._birdPropertyButton);
	},
	// クマ属性ボタンを子ノードとして属性ボタングループに追加
	_addBearPropertyButtonToGroup : function() {
		this.addChild(this._bearPropertyButton);
	},
	// カメ属性ボタンを子ノードとして属性ボタングループに追加
	_addTurtlePropertyButtonToGroup : function() {
		this.addChild(this._turtlePropertyButton);
	},

	// 属性ボタン全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},

	// イヌ属性ボタンのオブジェクトを返す
	_getDogPropertyButton : function() {
		return this._dogPropertyButton;
	},
	// トリ属性ボタンのオブジェクトを返す
	_getBirdPropertyButton : function() {
		return this._birdPropertyButton;
	},
	// クマ属性ボタンのオブジェクトを返す
	_getBearPropertyButton : function() {
		return this._bearPropertyButton;
	},
	// カメ属性ボタンのオブジェクトを返す
	_getTurtlePropertyButton : function() {
		return this._turtlePropertyButton;
	},

	// 現在押されているボタンをゲット
	_getPushButton : function() {
		return this._pushButton;
	},
	// 現在押されているボタンをセット
	_setPushButton : function(pushButton) {
		this._pushButton = pushButton;
	},

	// イラスト表示を親に依頼
	_requestAddIllust : function(illustType) {
		this._parent._addIllust(illustType);
	},
	// イラスト非表示を親に依頼
	_requestRemoveIllust : function(illustType) {
		this._parent._removeIllust(illustType);
	},
})