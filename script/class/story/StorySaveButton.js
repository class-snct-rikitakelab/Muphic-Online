var StorySaveButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_SAVEBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_SAVEBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_SAVEBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_SAVEBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		this._saveStoryBackground();
		this._saveStoryIllust();
	},
	// フレーム処理
	onenterframe : function() {
		if(this.touchEnabled === true) {
			var leftX = this.x;
			var rightX = this.x + this.width;
			var topY = this.y;
			var bottomY = this.y + this.height;
			var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
			var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
			if(mOverX === true && mOverY === true) {
				this._setOnOffImage("on");
			} else {
				this._setOnOffImage("off");
			}
		}
	},

	// 物語背景の保存
	_saveStoryBackground : function() {
		var _user_id = USER_ID;
		var _background_image_path = this._parent._previewScreen._background._path;
		var _weather_image_path = this._parent._previewScreen._weather._path;
		var _save_date = (new Date()).toString();
		var doc = {
			"user_id" : _user_id
		};
		socket.emit('removeStoryBackground', doc);
		doc = {
			"user_id" : _user_id,
			"background_image_path" : _background_image_path,
			"weather_image_path" : _weather_image_path,
			"save_date" : _save_date
		};
		socket.emit('saveStoryBackground', doc);
	},

	// 物語イラストの保存
	_saveStoryIllust : function() {
		var _user_id = USER_ID;
		var _save_date = (new Date()).toString();
		var _illust = this._parent._previewScreen._illust;
		var doc = {
			"user_id" : _user_id
		};
		socket.emit('removeStoryIllust', doc);
		if(_illust.length === 0) return;
		for(var i = 0; i < _illust.length; i++) {
			var _illust_image_path = _illust[i]._path;
			var _focus_image_path = _illust[i]._focus._path;
			var _width = _illust[i].width;
			var _height = _illust[i].height;
			var _x = _illust[i].x;
			var _y = _illust[i].y;
			var doc = {
				"user_id" : _user_id,
				"illust_image_path" : _illust_image_path,
				"focus_image_path" : _focus_image_path,
				"width" : _width,
				"height" : _height,
				"x" : _x,
				"y" : _y,
				"save_date" : _save_date
			};
			socket.emit('saveStoryIllust', doc);
		}
	},
})