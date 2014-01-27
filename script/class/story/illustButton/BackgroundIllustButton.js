var BackgroundIllustButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function(event) {
		this._parent._paletteMakeRequest("background");
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
			this._setOnOffImage("on");
		} else {
			this._setOnOffImage("off");
		}
	},
})