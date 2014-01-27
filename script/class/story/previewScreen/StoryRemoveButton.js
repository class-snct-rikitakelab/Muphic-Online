var StoryRemoveButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._touchButton = false; // ボタンをクリックしたかどうか
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// _touchButtonプロパティにブーリアン値をセットする
	_setTouchButton : function(touchButton) {
		this._touchButton = touchButton;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_REMOVEBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_REMOVEBUTTON_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[STORY_REMOVEBUTTON_PUSH._path];
		} else {
			this.image = core.assets[STORY_REMOVEBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_REMOVEBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_REMOVEBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		var myselfPush = this._isPush;
		if(myselfPush === true) {
			this._setIsPush(false);
			this._setOnOffImage("off");
		} else {
			this._setIsPush(true);
			this._setPushImage("push");
		}
		this._setTouchButton(true);
	},

	// フレーム処理
	onenterframe : function() {
		if(this.image !== core.assets[STORY_REMOVEBUTTON_DARK._path]) {
			var illust = this._parent._illust.length;
			if(illust > 0) {
				this._setTouchEnabled(true);
				this._setOpacity(1.0);
				var leftX = this.x;
				var rightX = this.x + this.width;
				var topY = this.y;
				var bottomY = this.y + this.height;
				var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
				var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
				if(mOverX === true && mOverY === true) {
					if(this._touchButton === false) {
						this._setOnOffImage("on");
					}
				} else {
					if(this._isPush === true) {
						this._setPushImage("push");
					} else {
						this._setOnOffImage("off");
					}
					this._setTouchButton(false);
				}
			} else {
				this._setIsPush(false);
				this._setOnOffImage("off");
				this._setTouchEnabled(false);
				this._setOpacity(0.5);
			}
		}
	},
})