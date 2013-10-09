var AnimalIllustButton = enchant.Class.create(enchant.Sprite, {
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
			this.image = core.assets[STORY_ANIMAL_ILLUSTBUTTON_ON._path];
		} else if(imageState === "off") {
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
		var animalPush = this._isPush;
		var humanPush = this._parent._getHumanIllustButton()._isPush;
		var itemPush = this._parent._getItemIllustButton()._isPush;
		var backgroundPush = this._parent._getBackgroundIllustButton()._isPush;

		if((humanPush === true || itemPush === true || backgroundPush === true) && animalPush === false) {
			if(humanPush === true) {
				this._parent._getHumanIllustButton()._setIsPush(false);
				this._parent._getHumanIllustButton()._setImage("off");
			} else if(itemPush === true) {
				this._parent._getItemIllustButton()._setIsPush(false);
				this._parent._getItemIllustButton()._setImage("off");
			} else if(backgroundPush === true) {
				this._parent._getBackgroundIllustButton()._setIsPush(false);
				this._parent._getBackgroundIllustButton()._setImage("off");
			}
			this._setIsPush(true);
			this._setImage("on");
		} else if(animalPush === true) {
			this._setIsPush(false);
			this._setImage("off");
		} else if(animalPush === false) {
			this._setIsPush(true);
			this._setImage("on");
		}
	},
})