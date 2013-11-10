// 小節を1つ前に戻すボタンを表すクラス
// (enchant.Spriteクラスを継承)
var MeasurePrevButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		// 以下, このクラスのプロパティ
		this._parent = null; // このクラスの親にあたるオブジェクト
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
			this.image = core.assets[MUSIC_PREVBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_PREVBUTTON_OFF._path];
		}
	},

	// ボタンが押された際の処理
	ontouchend : function(event) {
		// 小節を1つ前に戻してもらう
		this._parent._drawPrevScore();
	},

	// 定期処理
	onenterframe : function(event) {
		var nowPlace = this._parent._getNowPlace();
		var canPlay = this._parent._getPlayButtonState();

		if(nowPlace === 1) {
			// 現在表示されている小節が最小値の場合はボタンを押せない状態にする
			this._setOnOffImage("off");
			this._setCannotPush();
		} else {
			// 上記以外の場合は常にボタンを押せる状態にする
			this._setCanPush();
		}

		if(canPlay === true) {
			// 再生状態の際はボタンを押せない状態にする
			this._setCannotPush();
		} else {
			if(nowPlace > 1) {
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
		}
	},
})