var ModosuButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
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

	// ボタンが「押されている」状態の時の色に変更する
	_setOnImage : function() {
		this.image = core.assets[MUSIC_REMOVEANIMAL_ON._path];
	},

	// ボタンが「押されていない」状態の時の色に変更する
	_setOffImage : function() {
		this.image = core.assets[MUSIC_REMOVEANIMAL_OFF._path];
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

	// クリック時の処理
	ontouchend : function(event) {
		var canPutAnimal = this._parent._getAnimalButtonState();
		var canRemoveAnimal = this._isPush;

		if(canPutAnimal === true && canRemoveAnimal === false) {
			this._parent._setAnimalButtonState(false);
			canPutAnimal = false;
			this._parent._setAnimalButtonImage("off");
			this._setIsPush(true);
			canRemoveAnimal = true;
			this._setOnImage();
		} else if(canRemoveAnimal === true) {
			this._setIsPush(false);
			canRemoveAnimal = false;
		} else if(canRemoveAnimal === false) {
			this._setIsPush(true);
			canRemoveAnimal = true;
		}

		// ボタンを押すごとに状態を変える
		if(canRemoveAnimal === true) {
			this._setOnImage();
		} else if(canRemoveAnimal === false) {
			this._setOffImage();
		}
	},

	// 定期処理
	onenterframe : function() {
		var canPlay = this._parent._getPlayButtonState();

		if(canPlay === true) {
			// 再生状態の時はボタンを押せない状態に
			this._setCannotPush();
		} else if(canPlay === false) {
			// 再生状態でない時はボタンを押せる状態に
			this._setCanPush();
		}
	}
})