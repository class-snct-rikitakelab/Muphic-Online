var GirlPropertyButton = enchant.Class.create(enchant.Sprite, {
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

	// ボタンが「押されている」状態の時の色に変更する
	_setImage : function(imageState) {
		if(imageState === "on") {
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_ON._path];
		} else if(imageState === "off") {
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_OFF._path];
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
				case "man":
					this._parent._getManPropertyButton()._setIsPush(false);
					this._parent._getManPropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("man");
				case "lady":
					this._parent._getLadyPropertyButton()._setIsPush(false);
					this._parent._getLadyPropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("lady");
				case "boy":
					this._parent._getBoyPropertyButton()._setIsPush(false);
					this._parent._getBoyPropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("boy");
			}
			this._setIsPush(true);
			this._setImage("on");
			this._parent._setPushButton("girl");
			this._parent._requestAddIllust("girl");
		}
	},
})