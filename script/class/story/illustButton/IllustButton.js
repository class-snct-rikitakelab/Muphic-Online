var IllustButton = enchant.Class.create({
	initialize : function(parent) {
		this._humanButton = null;
		this._animalButton = null;
		this._itemButton = null;
		this._backgroundButton = null;
		this._pushButton = null; // 現在押されているボタン
		this._parent = parent;
	},

	// 「じんぶつ」イラストボタンを生成
	_createHumanButton : function() {
		var path = STORY_HUMAN_ILLUSTBUTTON_OFF._path;
		var width = STORY_HUMAN_ILLUSTBUTTON_OFF._width;
		var height = STORY_HUMAN_ILLUSTBUTTON_OFF._height;
		var x = 35;
		var y = 200;
		this._humanButton = new HumanIllustButton(path, width, height, x, y, this);
	},
	// 「どうぶつ」イラストボタンを生成
	_createAnimalButton : function() {
		var path = STORY_ANIMAL_ILLUSTBUTTON_OFF._path;
		var width = STORY_ANIMAL_ILLUSTBUTTON_OFF._width;
		var height = STORY_ANIMAL_ILLUSTBUTTON_OFF._height;
		var x = 35;
		var y = 329;
		this._animalButton = new AnimalIllustButton(path, width, height, x, y, this);
	},
	// 「あいてむ」イラストボタンを生成
	_createItemButton : function() {
		var path = STORY_ITEM_ILLUSTBUTTON_OFF._path;
		var width = STORY_ITEM_ILLUSTBUTTON_OFF._width;
		var height = STORY_ITEM_ILLUSTBUTTON_OFF._height;
		var x = 35;
		var y = 458;
		this._itemButton = new ItemIllustButton(path, width, height, x, y, this);
	},
	// 「はいけい」イラストボタンを生成
	_createBackgroundButton : function() {
		var path = STORY_BACKGROUND_ILLUSTBUTTON_OFF._path;
		var width = STORY_BACKGROUND_ILLUSTBUTTON_OFF._width;
		var height = STORY_BACKGROUND_ILLUSTBUTTON_OFF._height;
		var x = 35;
		var y = 587;
		this._backgroundButton = new BackgroundIllustButton(path, width, height, x, y, this);
	},

	// イラストボタン全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this._humanButton);
		storyScene.addChild(this._animalButton);
		storyScene.addChild(this._itemButton);
		storyScene.addChild(this._backgroundButton);
	},

	// 「じんぶつ」イラストボタンのオブジェクトを返す
	_getHumanButton : function() {
		return this._humanButton;
	},
	// 「どうぶつ」イラストボタンのオブジェクトを返す
	_getAnimalButton : function() {
		return this._animalButton;
	},
	// 「あいてむ」イラストボタンのオブジェクトを返す
	_getItemButton : function() {
		return this._itemButton;
	},
	// 「はいけい」イラストボタンのオブジェクトを返す
	_getBackgroundButton : function() {
		return this._backgroundButton;
	},

	// 現在押されているボタンをゲット
	_getPushButton : function() {
		return this._pushButton;
	},
	// 現在押されているボタンをセット
	_setPushButton : function(pushButton) {
		this._pushButton = pushButton;
	},
})