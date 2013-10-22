var PropertyButton = enchant.Class.create(enchant.Group, {
	initialize : function(firstSelectButton, parent) {
		enchant.Group.call(this);
		this._manPropertyButton = null;
		this._ladyPropertyButton = null;
		this._boyPropertyButton = null;
		this._girlPropertyButton = null;
		this._pushButton = firstSelectButton;
		this._parent = parent;
	},

	// お兄さん属性ボタンのオブジェクトを生成
	_createManPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_MAN_ON._path;
		var width = STORY_PALETTEPROPERTY_MAN_ON._width;
		var height = STORY_PALETTEPROPERTY_MAN_ON._height;
		var x = (APP_WIDTH - STORY_PALETTE._width) / 2 + 196;
		var y = (APP_HEIGHT - STORY_PALETTE._height) / 2 + 20;
		this._manPropertyButton = new ManPropertyButton(path, width, height, x, y, this);
	},
	// お姉さん属性ボタンのオブジェクトを生成
	_createLadyPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_LADY_OFF._path;
		var width = STORY_PALETTEPROPERTY_LADY_OFF._width;
		var height = STORY_PALETTEPROPERTY_LADY_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE._width) / 2 + 196 + 107;
		var y = (APP_HEIGHT - STORY_PALETTE._height) / 2 + 20;
		this._ladyPropertyButton = new LadyPropertyButton(path, width, height, x, y, this);
	},
	// 男の子属性ボタンのオブジェクトを生成
	_createBoyPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_BOY_OFF._path;
		var width = STORY_PALETTEPROPERTY_BOY_OFF._width;
		var height = STORY_PALETTEPROPERTY_BOY_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE._width) / 2 + 196 + 214;
		var y = (APP_HEIGHT - STORY_PALETTE._height) / 2 + 20;
		this._boyPropertyButton = new BoyPropertyButton(path, width, height, x, y, this);
	},
	// 女の子属性ボタンのオブジェクトを生成
	_createGirlPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_GIRL_OFF._path;
		var width = STORY_PALETTEPROPERTY_GIRL_OFF._width;
		var height = STORY_PALETTEPROPERTY_GIRL_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE._width) / 2 + 196 + 321;
		var y = (APP_HEIGHT - STORY_PALETTE._height) / 2 + 20;
		this._girlPropertyButton = new GirlPropertyButton(path, width, height, x, y, this);
	},

	// お兄さん属性ボタンを子ノードとして属性ボタングループに追加
	_addManPropertyButtonToGroup : function() {
		this.addChild(this._manPropertyButton);
	},
	// お姉さん属性ボタンを子ノードとして属性ボタングループに追加
	_addLadyPropertyButtonToGroup : function() {
		this.addChild(this._ladyPropertyButton);
	},
	// 男の子属性ボタンを子ノードとして属性ボタングループに追加
	_addBoyPropertyButtonToGroup : function() {
		this.addChild(this._boyPropertyButton);
	},
	// 女の子属性ボタンを子ノードとして属性ボタングループに追加
	_addGirlPropertyButtonToGroup : function() {
		this.addChild(this._girlPropertyButton);
	},

	// 属性ボタン全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},

	// お兄さん属性ボタンのオブジェクトを返す
	_getManPropertyButton : function() {
		return this._manPropertyButton;
	},
	// お姉さん属性ボタンのオブジェクトを返す
	_getLadyPropertyButton : function() {
		return this._ladyPropertyButton;
	},
	// 男の子属性ボタンのオブジェクトを返す
	_getBoyPropertyButton : function() {
		return this._boyPropertyButton;
	},
	// 女の子属性ボタンのオブジェクトを返す
	_getGirlPropertyButton : function() {
		return this._girlPropertyButton;
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