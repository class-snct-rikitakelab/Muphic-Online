var BackgroundPaletteImage = enchant.Class.create(enchant.Sprite, {
	initialize : function(backgroundPath, weatherPath, thumbnailPath, imageWidth, imageHeight, thumbnailWidth, thumbnailHeight, minX, minY, parent) {
		enchant.Sprite.call(this, thumbnailWidth, thumbnailHeight);
		this.image = core.assets[thumbnailPath];
		this.x = minX;
		this.y = minY;
		this.opacity = 0.5;
		this._backgroundPath = backgroundPath;
		this._weatherPath = weatherPath;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
		this._minX = minX;
		this._maxX = minX + this.width;
		this._minY = minY;
		this._maxY = minY + this.height;
		this._parent = parent;
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

	_setOpacity : function(opacity) {
		this.opacity = opacity;
	},

	// 引数のx座標値が画像のx座標上にあるかチェック
	_mouseOverX : function(x) {
		if(this._minX <= x && x <= this._maxX) {
			return true;
		} else {
			return false;
		}
	},

	// 引数のy座標値が画像のy座標上にあるかチェック
	_mouseOverY : function(y) {
		if(this._minY <= y && y <= this._maxY) {
			return true;
		} else {
			return false;
		}
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
		var mouseOverX = this._mouseOverX(clientX);
		var mouseOverY = this._mouseOverY(clientY);
		if(mouseOverX === true && mouseOverY === true) {
			this._setOpacity(1.0);
		} else {
			this._setOpacity(0.3);
		}
	},
})