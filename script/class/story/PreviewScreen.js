var PreviewScreen = enchant.Class.create({
	initialize : function(width, height) {
		this._frame			= null;
		this._background	= null;
		this._weather		= null;
		this._humans		= new Array();
		this._animals		= new Array();
		this._items			= new Array();
		this._parent		= null;
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
		var type	= objectsInformation[objectString].type;

		switch(type) {
			case "human":
				var index = this._parent._getHumansCount();

				this._humans[index]			= new enchant.Sprite(width, height);
				this._humans[index].image	= core.assets[image];
				this._humans[index].x		= x;
				this._humans[index].y		= y;
				this._parent._humansCountIncrement();
				break;
			case "animal":
				var index = this._parent._getAnimalsCount();
				
				this._animals[index]		= new enchant.Sprite(width, height);
				this._animals[index].image	= core.assets[image];
				this._animals[index].x		= x;
				this._animals[index].y		= y;
				this._parent._animalsCountIncrement();
				break;
			case "item":
				var index = this._parent._getItemsCount();
				
				this._items[index]			= new enchant.Sprite(width, height);
				this._items[index].image	= core.assets[image];
				this._items[index].x		= x;
				this._items[index].y		= y;
				this._parent._itemsCountIncrement();
				break;
		}
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
		for(var i = 0, max = this._animals.length; i < max; i++) {
			this._showAnimal(i);
		}
		for(var i = 0, max = this._humans.length; i < max; i++) {
			this._showHuman(i);
		}
		for(var i = 0, max = this._items.length; i < max; i++) {
			this._showItem(i);r
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

	_showHuman : function(index) {
		storyScene.addChild(this._humans[index]);
	},

	_showAnimal : function(index) {
		storyScene.addChild(this._animals[index]);
	},

	_showItem : function(index) {
		storyScene.addChild(this._items[index]);
	},
})