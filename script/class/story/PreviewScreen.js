var PreviewScreen = enchant.Class.create({
	initialize : function(width, height) {
		this._frame				= null;
		this._background		= null;
		this._weather			= null;
		this._objects			= new Array();
		this._objectsCount		= 0;
		this._parent			= null;
	},

	_createFrame : function() {
		this._frame			= new enchant.Sprite(PREVIEW_FRAME_WIDTH, PREVIEW_FRAME_HEIGHT);
		this._frame.image	= core.assets[PREVIEW_FRAME];
		this._frame.x		= (APP_WIDTH / 2) - (PREVIEW_FRAME_WIDTH / 2);
		this._frame.y		= 200;
	},

	_createBackground : function() {
		this._background		= new enchant.Sprite(PREVIEW_BACKGROUND_WIDTH, PREVIEW_BACKGROUND_HEIGHT);
		this._background.image	= null;
		this._background.x		= (APP_WIDTH / 2) - (PREVIEW_BACKGROUND_WIDTH / 2);
		this._background.y		= 200;
	},

	_createWeather : function() {
		this._weather		= new enchant.Sprite(PREVIEW_WEATHER_WIDTH, PREVIEW_WEATHER_HEIGHT);
		this._weather.image	= null;
		this._weather.x		= (APP_WIDTH / 2) - (PREVIEW_WEATHER_WIDTH / 2);
		this._weather.y		= 200;
	},

	_createObject : function(objectString, x, y) {
		var image	= objectsInformation[objectString].image;
		var width	= objectsInformation[objectString].width;
		var height	= objectsInformation[objectString].height;

		this._objects[this._objectsCount]		= new enchant.Sprite(width, height);
		this._objects[this._objectsCount].image	= core.assets[image];
		this._objects[this._objectsCount].x		= x;
		this._objects[this._objectsCount].y		= y;

		this._objectsCount++;
	},

	_setBackgroundImage : function(image) {
		this._background.image = core.assets[image];
	},

	_setWeatherImage : function(image) {
		this._weather.image = core.assets[image];
	},

	_showPreviewScreen : function() {
		this._showWeather();
		this._showBackground();
		this._showFrame();
		for(var i = 0; i < this._objects.length; i++) {
			this._showObject(i);
		}
	},

	_showFrame : function() {
		storyScene.addChild(this._frame);
	},

	_showBackground : function() {
		storyScene.addChild(this._background);
	},

	_showWeather : function() {
		storyScene.addChild(this._weather);
	},

	_showObject : function(index) {
		storyScene.addChild(this._objects[index]);
	},
})