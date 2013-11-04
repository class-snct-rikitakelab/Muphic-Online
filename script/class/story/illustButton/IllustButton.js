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

	_paletteMakeRequest : function(paletteType){
		this._parent._setDarkScreenBackground();
		this._parent._setCannotPushMusicButton();
		this._setCannotPushAllIllustButton();
		this._parent._previewScreen._removeButton._setIsPush(false);
		this._parent._previewScreen._removeButton._setImage("off");
		this._parent._setCannotPushRemoveButton();

		switch(paletteType) {
			case "human":
				this._parent._createHumanPalette();
				this._parent._humanPalette._addToStoryScene();
				this._parent._humanPalette._addIllust("man");
				break;
			case "animal":
				this._parent._createAnimalPalette();
				this._parent._animalPalette._addToStoryScene();
				this._parent._animalPalette._addIllust("dog");
				break;
			case "item":
				this._parent._createItemPalette();
				this._parent._itemPalette._addToStoryScene();
				this._parent._itemPalette._addIllust("food");
				this._parent._itemPalette._addIllust("fashion");
				this._parent._itemPalette._addIllust("interior");
				this._parent._itemPalette._addIllust("goods");
				break;
			case "background":
				this._parent._createBackgroundPalette();
				this._parent._backgroundPalette._addToStoryScene();
				this._parent._backgroundPalette._addIllust("sunny");
				break;
		}
	},

	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._humanButton._setTouchEnabled(true);
		this._humanButton._setDarkImage(false);
		this._animalButton._setTouchEnabled(true);
		this._animalButton._setDarkImage(false);
		this._itemButton._setTouchEnabled(true);
		this._itemButton._setDarkImage(false);
		this._backgroundButton._setTouchEnabled(true);
		this._backgroundButton._setDarkImage(false);
	},
	// イラストボタン全体を押せない状態に
	_setCannotPushAllIllustButton : function() {
		this._humanButton._setTouchEnabled(false);
		this._humanButton._setDarkImage(true);
		this._animalButton._setTouchEnabled(false);
		this._animalButton._setDarkImage(true);
		this._itemButton._setTouchEnabled(false);
		this._itemButton._setDarkImage(true);
		this._backgroundButton._setTouchEnabled(false);
		this._backgroundButton._setDarkImage(true);
	},
})