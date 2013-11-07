var ManPropertyButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
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

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_PALETTEPROPERTY_MAN_ON._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_MAN_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[STORY_PALETTEPROPERTY_MAN_PUSH._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_MAN_OFF._path];
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
		if(myselfPush === false && otherPush !== null) {
			switch(otherPush) {
				case "lady":
					this._parent._getLadyPropertyButton()._setIsPush(false);
					this._parent._getLadyPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("lady");
				case "boy":
					this._parent._getBoyPropertyButton()._setIsPush(false);
					this._parent._getBoyPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("boy");
				case "girl":
					this._parent._getGirlPropertyButton()._setIsPush(false);
					this._parent._getGirlPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("girl");
			}
			this._setIsPush(true);
			this._setPushImage("push");
			this._parent._setPushButton("man");
			this._parent._requestAddIllust("man");
		}
	},

	// フレーム処理
	onenterframe : function() {
		if(this._isPush === false) {
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
})