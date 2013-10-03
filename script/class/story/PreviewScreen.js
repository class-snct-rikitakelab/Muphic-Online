var PreviewScreen = enchant.Class.create({
	initialize : function() {
		this._frame = null;
		this._background = null;
		this._weather = null;
		this._humans = new Array();
		this._animals = new Array();
		this._items = new Array();
		this._parent = null;
	},

	_createFrame : function() {
		var path = STORY_PREVIEWFRAME._path;
		var width = STORY_PREVIEWFRAME._width;
		var height = STORY_PREVIEWFRAME._height;

		this._frame = new enchant.Sprite(width, height);
		this._frame.image = core.assets[path];
		this._frame.x = (APP_WIDTH - width) / 2;
		this._frame.y = 200;
	},

	_createBackground : function() {
		var width = STORY_PREVIEWFRAME._width;
		var height = STORY_PREVIEWFRAME._height;

		this._background = new enchant.Sprite(width, height);
		this._background.image = null;
		this._background.x = (APP_WIDTH - width) / 2;
		this._background.y = 200;
	},

	_createWeather : function() {
		var width = STORY_PREVIEWWEATHER_SUN._width;
		var height = STORY_PREVIEWWEATHER_SUN._height;

		this._weather = new enchant.Sprite(width, height);
		this._weather.image = null;
		this._weather.x = (APP_WIDTH - width) / 2;
		this._weather.y = 200;
	},

	_createObject : function(type, pose, face, x, y) {
		switch(type) {
			case "man":
			case "lady":
			case "boy":
			case "girl":
				var path, width, height;
				if(pose !== "back") {
					path = previewObject[type][pose][face]._path;
					width = previewObject[type][pose][face]._width;
					height = previewObject[type][pose][face]._height;
				} else {
					path = previewObject[type][pose]._path;
					width = previewObject[type][pose]._width;
					height = previewObject[type][pose]._height;
				}
				var index = this._parent._getHumansCount();

				this._humans[index] = new enchant.Sprite(width, height);
				this._humans[index].image = core.assets[path];
				this._humans[index].x = x;
				this._humans[index].y = y;
				this._parent._humansCountIncrement();
				break;
			case "dog":
			case "bird":
			case "bear":
			case "turtle":
				var path, width, height;
				if(pose !== "back") {
					path = previewObject[type][pose][face]._path;
					width = previewObject[type][pose][face]._width;
					height = previewObject[type][pose][face]._height;
				} else {
					path = previewObject[type][pose]._path;
					width = previewObject[type][pose]._width;
					height = previewObject[type][pose]._height;
				}
				var index = this._parent._getAnimalsCount();

				this._animals[index] = new enchant.Sprite(width, height);
				this._animals[index].image = core.assets[path];
				this._animals[index].x = x;
				this._animals[index].y = y;
				this._parent._animalsCountIncrement();
				break;
		}
	},

	_setBackgroundImage : function(path) {
		this._background.image = core.assets[path];
	},

	_setWeatherImage : function(path) {
		this._weather.image = core.assets[path];
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
			this._showItem(i);
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