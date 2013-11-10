var BackgroundPaletteImage = enchant.Class.create(StorySceneSprite, {
	initialize : function(backgroundPath, weatherPath, thumbnailPath, imageWidth, imageHeight, thumbnailWidth, thumbnailHeight, x, y, parent) {
		StorySceneSprite.call(this, thumbnailPath, thumbnailWidth, thumbnailHeight, x, y, parent);
		this.opacity = 0.5;
		// 以下, このクラスのプロパティ
		this._backgroundPath = backgroundPath;
		this._weatherPath = weatherPath;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
	},

	// 画面全体の背景を暗くしない
	_setNotDarkScreenBackground : function() {
		this._parent._setNotDarkScreenBackground();
	},
	// 作曲画面への遷移ボタンを押せる状態に
	_setCanPushMusicButton : function() {
		this._parent._setCanPushMusicButton();
	},
	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._parent._setCanPushAllIllustButton();
	},
	// 削除ボタンを押せる状態に
	_setCanPushRemoveButton : function() {
		this._parent._setCanPushRemoveButton();
	},
	// 背景画像をセット
	_setBackgroundImage : function(path) {
		this._parent._setBackgroundImage(path);
	},
	// 天気画像をセット
	_setWeatherImage : function(path) {
		this._parent._setWeatherImage(path);
	},

	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	// クリック処理
	ontouchend : function() {
		this._setNotDarkScreenBackground();
		this._setCanPushMusicButton();
		this._setCanPushAllIllustButton();
		this._setCanPushRemoveButton();
		this._setBackgroundImage(this._backgroundPath);
		this._setWeatherImage(this._weatherPath);
		this._removePalette();
	},

	// フレーム処理
	onenterframe : function() {
		var leftX = this.x;
		var rightX = this.x + this.width;
		var topY = this.y;
		var bottomY = this.y + this.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._setOpacity(1.0);
		} else {
			this._setOpacity(0.3);
		}
	},
})