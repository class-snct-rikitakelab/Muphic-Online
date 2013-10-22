var AnimalIllustButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._canTouch = true; // ボタンが押せるかどうか
		this._parent = parent; // このクラスの親にあたるオブジェクト
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// touchEnabledプロパティにブーリアン値をセットする
	_setTouchEnabled : function(touchEnabled) {
		this.touchEnabled = touchEnabled;
	},

	// opacityプロパティのブーリアン値をセットする
	_setOpacity : function(opacity) {
		this.opacity = opacity;
	},

	//ボタンが押せない状態にする
	_setTouchEnable : function (canTouch) {
		this._canTouch = canTouch;
	},

	// ボタンが「押されている」状態の時の色に変更する
	_setImage : function(imageState) {
		if(imageState === "on") {
			this.image = core.assets[STORY_ANIMAL_ILLUSTBUTTON_ON._path];
		} else if(imageState === "off") {
			this.image = core.assets[STORY_ANIMAL_ILLUSTBUTTON_OFF._path];
		}
	},

	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_ANIMAL_ILLUSTBUTTON_OFF_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_ANIMAL_ILLUSTBUTTON_OFF._path];
		}
	},

	// ボタンの全てのステータスを押せる状態に合わせる
	_setCanPush : function() {
		this._setTouchEnabled(true);
		this._setOpacity(1.0);
	},

	// ボタンの全てのステータスを押せない状態に合わせる
	_setCannotPush : function() {
		this._setTouchEnabled(false);
		this._setOpacity(0.5);
	},

	// クリック時の処理
	ontouchend : function(event) {
		var myselfPush = this._isPush;
		var otherPush = this._parent._getPushButton();
		if(this._canTouch === true){
			if(myselfPush === false && otherPush !== null) {
				switch(otherPush) {
					case "human":
						this._parent._getHumanButton()._setIsPush(false);
						this._parent._getHumanButton()._setImage("off");
						break;
					case "item":
						this._parent._getItemButton()._setIsPush(false);
						this._parent._getItemButton()._setImage("off");
						break;
					case "background":
						this._parent._getBackgroundButton()._setIsPush(false);
						this._parent._getBackgroundButton()._setImage("off");
						break;
				}
				this._setIsPush(true);
				this._setImage("on");
				this._parent._setPushButton("animal");
			} else if(myselfPush === true) {
				this._setIsPush(false);
				this._setImage("off");
				this._parent._setPushButton(null);
			} else if(myselfPush === false) {
				this._setIsPush(true);
				this._setImage("on");
				this._parent._setPushButton("animal");
			}
		}
	},
})