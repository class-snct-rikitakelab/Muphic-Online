var parentPointer = null;

/*
socket.on('selectStoryBackground', function(doc) {
	var backgroundImagePath = doc.background_image_path;
	var weatherImagePath = doc.weather_image_path;
	parentPointer._previewScreen._setBackgroundImage(backgroundImagePath);
	parentPointer._previewScreen._setWeatherImage(weatherImagePath);
});
socket.on('selectStoryIllust', function(docs) {
	docs.sort(function(a, b) {
		var x = a._id;
		var y = b._id;
		if(x > y) return 1;
		if(x < y) return -1;
		return 0;
	});
	for(var i = 0; i < docs.length; i++) {
		var illustImagePath = docs[i].illust_image_path;
		var focusImagePath = docs[i].focus_image_path;
		var width = docs[i].width;
		var height = docs[i].height;
		var x = docs[i].x;
		var y = docs[i].y;
		parentPointer._previewScreen._createIllust(illustImagePath, focusImagePath, width, height, x, y);
	}
	parentPointer._previewScreen._addAllIllust();
});
*/

var StoryLoadButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
		parentPointer = parent;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_LOADBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_LOADBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_LOADBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_LOADBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		this._loadStoryBackground();
		this._loadStoryIllust();
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

	// 物語背景の読み込み
	_loadStoryBackground : function() {
		var _user_id = USER_ID;
		var doc = {
			"user_id" : _user_id
		};
		socket.emit('selectStoryBackground', doc);
	},
	// 物語イラストの読み込み
	_loadStoryIllust : function() {
		var _user_id = USER_ID;
		var doc = {
			"user_id" : _user_id
		};
		socket.emit('selectStoryIllust', doc);
	},
})