var ManPropertyButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._parent = null; // このクラスの親にあたるオブジェクト
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
			this.image = core.assets[STORY_PALETTEPROPERTY_MAN_ON._path];
		} else if(imageState === "off") {
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
		var manPush = this._isPush;
		var ladyPush = this._parent._getLadyPropertyButton()._isPush;
		var boyPush = this._parent._getBoyPropertyButton()._isPush;
		var girlPush = this._parent._getGirlPropertyButton()._isPush;

		if((ladyPush === true || boyPush === true || girlPush === true) && manPush === false) {
			if(ladyPush === true) {
				this._parent._getLadyPropertyButton()._setIsPush(false);
				this._parent._getLadyPropertyButton()._setImage("off");
				this._parent._removeLadyImages();
			} else if(boyPush === true) {
				this._parent._getBoyPropertyButton()._setIsPush(false);
				this._parent._getBoyPropertyButton()._setImage("off");
				this._parent._removeBoyImages();
			} else if(girlPush === true) {
				this._parent._getGirlPropertyButton()._setIsPush(false);
				this._parent._getGirlPropertyButton()._setImage("off");
				this._parent._removeGirlImages();
			}
			this._setIsPush(true);
			this._setImage("on");
			this._parent._showManImages();
		}
	},
})