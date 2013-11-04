var BackgroundPropertyButton =  enchant.Class.create(enchant.Group, {
	initialize : function(firstSelectButton, parent) {
		enchant.Group.call(this);
		this._sunnyPropertyButton = null;
		this._cloudPropertyButton = null;
		this._nightPropertyButton = null;
		this._pushButton = firstSelectButton;
		this._parent = parent;
	},

	// 晴れ属性ボタンのオブジェクトを生成
	_createSunnyPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_SUNNY_ON._path;
		var width = STORY_PALETTEPROPERTY_SUNNY_ON._width;
		var height = STORY_PALETTEPROPERTY_SUNNY_ON._height;
		var x = (APP_WIDTH - STORY_PALETTE_3._width) / 2 + 330;
		var y = (APP_HEIGHT - STORY_PALETTE_3._height) / 2 + 30;
		this._sunnyPropertyButton = new SunnyPropertyButton(path, width, height, x, y, this);
	},
	// 雲り属性ボタンのオブジェクトを生成
	_createCloudPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_CLOUD_OFF._path;
		var width = STORY_PALETTEPROPERTY_CLOUD_OFF._width;
		var height = STORY_PALETTEPROPERTY_CLOUD_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_3._width) / 2 + 330 + 127;
		var y = (APP_HEIGHT - STORY_PALETTE_3._height) / 2 + 30;
		this._cloudPropertyButton = new CloudPropertyButton(path, width, height, x, y, this);
	},
	// 夜属性ボタンのオブジェクトを生成
	_createNightPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_NIGHT_OFF._path;
		var width = STORY_PALETTEPROPERTY_NIGHT_OFF._width;
		var height = STORY_PALETTEPROPERTY_NIGHT_OFF._height;
		var x = (APP_WIDTH - STORY_PALETTE_3._width) / 2 + 330 + 254;
		var y = (APP_HEIGHT - STORY_PALETTE_3._height) / 2 + 30;
		this._nightPropertyButton = new NightPropertyButton(path, width, height, x, y, this);
	},

	// 晴れ属性ボタンを子ノードとして属性ボタングループに追加
	_addSunnyPropertyButtonToGroup : function() {
		this.addChild(this._sunnyPropertyButton);
	},
	// 雲り属性ボタンを子ノードとして属性ボタングループに追加
	_addCloudPropertyButtonToGroup : function() {
		this.addChild(this._cloudPropertyButton);
	},
	// 夜属性ボタンを子ノードとして属性ボタングループに追加
	_addNightPropertyButtonToGroup : function() {
		this.addChild(this._nightPropertyButton);
	},

	// 属性ボタン全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},

	// 晴れ属性ボタンのオブジェクトを返す
	_getSunnyPropertyButton : function() {
		return this._sunnyPropertyButton;
	},
	// 雲り属性ボタンのオブジェクトを返す
	_getCloudPropertyButton : function() {
		return this._cloudPropertyButton;
	},
	// 夜属性ボタンのオブジェクトを返す
	_getNightPropertyButton : function() {
		return this._nightPropertyButton;
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