var StoryMediator = enchant.Class.create({
	initialize : function() {
		this._changeMusicButton = null;
		this._previewScreen = null;
		this._previewScreenData = null;
		this._humanIllustButton = null;
		this._animalIllustButton = null;
		this._itemIllustButton = null;
		this._backgroundIllustButton = null;
		this._pallet = null;
		this._parent = null;
	},

	// 仲介メソッド
	// 作曲ボタンゲッタ
	_getChangeMusicButton : function() {
		return this._changeMusicButton;
	},
	// プレビュー画面ゲッタ
	_getPreviewScreen : function() {
		return this._previewScreen;
	},
	// プレビュー画面データゲッタ
	_getPreviewScreenData : function() {
		return this._previewScreenData;
	},
	// じんぶつイラストボタンゲッタ
	_getHumanIllustButton : function() {
		return this._humanIllustButton;
	},
	// どうぶつイラストボタンゲッタ
	_getAnimalIllustButton : function() {
		return this._animalIllustButton;
	},
	// あいてむイラストボタンゲッタ
	_getItemIllustButton : function() {
		return this._itemIllustButton;
	},
	// はいけいイラストボタンゲッタ
	_getBackgroundIllustButton : function() {
		return this._backgroundIllustButton;
	},
	// パレットゲッタ
	_getPallet : function() {
		return this._pallet;
	},

	// プレビュー画面に関する仲介メソッド
	_createFrame : function() {
		this._previewScreen._createFrame();
	},

	_createBackground : function() {
		this._previewScreen._createBackground();
	},

	_createWeather : function() {
		this._previewScreen._createWeather();
	},

	_createObject : function(type, pose, face, x, y) {
		this._previewScreen._createObject(type, pose, face, x, y);
	},

	_setBackgroundImage : function(path) {
		this._previewScreen._setBackgroundImage(path);
	},

	_setWeatherImage : function(path) {
		this._previewScreen._setWeatherImage(path);
	},

	_showPreviewScreen : function() {
		this._previewScreen._showPreviewScreen();
	},

	// プレビュー画面データに関する仲介メソッド
	_getHumansCount : function() {
		return this._previewScreenData._humansCount;
	},

	_getAnimalsCount : function() {
		return this._previewScreenData._animalsCount;
	},

	_getItemsCount : function() {
		return this._previewScreenData._itemsCount;
	},

	_humansCountIncrement : function() {
		this._previewScreenData._humansCountIncrement();
	},

	_animalsCountIncrement : function() {
		this._previewScreenData._animalsCountIncrement();
	},

	_itemsCountIncrement : function() {
		this._previewScreenData._itemsCountIncrement();
	},
})