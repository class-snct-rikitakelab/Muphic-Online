// 動物ボタンを表すクラス
// (enchant.Spriteクラスを継承)
var AnimalButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._touchButton = false; // ボタンをクリックしたかどうか
		this._parent = null; // このクラスの親にあたるオブジェクト
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// _touchButtonプロパティにブーリアン値をセットする
	_setTouchButton : function(touchButton) {
		this._touchButton = touchButton;
	},

	// ボタンを押せる状態にする
	_setTouchEnable : function() {
		this.touchEnabled = true;
	},

	// ボタンを押せない状態にする
	_setTouchDisable : function() {
		this.touchEnabled = false;
	},

	// ボタンを不透明状態にする
	_setOpacity : function() {
		this.opacity = 1.0;
	},

	// ボタンを半透明状態にする
	_setTransparent : function() {
		this.opacity = 0.5;
	},

	// ボタンの全てのステータスを押せる状態に合わせる
	_setCanPush : function() {
		this._setTouchEnable();
		this._setOpacity();
	},

	// ボタンの全てのステータスを押せない状態に合わせる
	_setCannotPush : function() {
		this._setTouchDisable();
		this._setTransparent();
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_PIANOCAT_ON._path];
		} else {
			this.image = core.assets[MUSIC_PIANOCAT_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[MUSIC_PIANOCAT_PUSH._path];
		} else {
			this.image = core.assets[MUSIC_PIANOCAT_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function(event) {
		var canRemoveAnimal = this._parent._getModosuButtonState();
		var canPutAnimal = this._isPush;
		if(canRemoveAnimal === true && canPutAnimal === false) {
			this._parent._setModosuButtonState(false);
			canRemoveAnimal = false;
			this._parent._setModosuButtonImage("off");
			this._setIsPush(true);
			canPutAnimal = true;
		} else if(canPutAnimal === true) {
			this._setIsPush(false);
			canPutAnimal = false;
		} else if(canPutAnimal === false) {
			this._setIsPush(true);
			canPutAnimal = true;
		}

		// ボタンを押すごとに状態を変える
		if(canPutAnimal === true) {
			this._setPushImage("push");
		} else if(canPutAnimal === false) {
			this._setOnOffImage("off");
		}
		this._setTouchButton(true);
	},

	// 定期処理
	onenterframe : function() {
		var canPlay = this._parent._getPlayButtonState();
		if(canPlay === true) {
			// 再生状態の時はボタンを押せない状態に
			this._setOnOffImage("off");
			this._setCannotPush();
		} else if(canPlay === false) {
			// 再生状態でない時はボタンを押せる状態に
			this._setCanPush();
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
		}
	}
})