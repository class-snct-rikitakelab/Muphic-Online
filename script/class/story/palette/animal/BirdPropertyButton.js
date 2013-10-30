var BirdPropertyButton = enchant.Class.create(enchant.Sprite, {
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
			this.image = core.assets[STORY_PALETTEPROPERTY_BIRD_ON._path];
		} else if(imageState === "off") {
			this.image = core.assets[STORY_PALETTEPROPERTY_BIRD_OFF._path];
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
				case "dog":
					this._parent._getDogPropertyButton()._setIsPush(false);
					this._parent._getDogPropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("dog");
				case "bear":
					this._parent._getBearPropertyButton()._setIsPush(false);
					this._parent._getBearPropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("bear");
				case "turtle":
					this._parent._getTurtlePropertyButton()._setIsPush(false);
					this._parent._getTurtlePropertyButton()._setImage("off");
					this._parent._requestRemoveIllust("turtle");
			}
			this._setIsPush(true);
			this._setImage("on");
			this._parent._setPushButton("bird");
			this._parent._requestAddIllust("bird");
		}
	},
})