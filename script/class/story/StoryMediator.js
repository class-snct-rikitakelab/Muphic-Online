var StoryMediator = enchant.Class.create({
	initialize : function() {
		this._changeMusicButton	= null;
		this._previewScreen		= null;
		this._previewScreenData	= null;
		this._parent			= null;
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

	_createObject : function(objectString, x, y) {
		this._previewScreen._createObject(objectString, x, y);
	},

	_setBackgroundImage : function(image) {
		this._previewScreen._setBackgroundImage(image);
	},

	_setWeatherImage : function(image) {
		this._previewScreen._setWeatherImage(image);
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