var BackgroundIllustButton = enchant.Class.create(enchant.Sprite, {
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
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_ON._path];
		} else if(imageState === "off") {
			this.image = core.assets[STORY_BACKGROUND_ILLUSTBUTTON_OFF._path];
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
		var backgroundPush = this._isPush;
		var humanPush = this._parent._getHumanIllustButton()._isPush;
		var animalPush = this._parent._getAnimalIllustButton()._isPush;
		var itemPush = this._parent._getItemIllustButton()._isPush;

		if((humanPush === true || animalPush === true || itemPush === true) && backgroundPush === false) {
			if(humanPush === true) {
				this._parent._getHumanIllustButton()._setIsPush(false);
				this._parent._getHumanIllustButton()._setImage("off");
			} else if(animalPush === true) {
				this._parent._getAnimalIllustButton()._setIsPush(false);
				this._parent._getAnimalIllustButton()._setImage("off");
			} else if(itemPush === true) {
				this._parent._getItemIllustButton()._setIsPush(false);
				this._parent._getItemIllustButton()._setImage("off");
			}
			this._setIsPush(true);
			this._setImage("on");
		} else if(backgroundPush === true) {
			this._setIsPush(false);
			this._setImage("off");
		} else if(backgroundPush === false) {
			this._setIsPush(true);
			this._setImage("on");
		}
	},
})