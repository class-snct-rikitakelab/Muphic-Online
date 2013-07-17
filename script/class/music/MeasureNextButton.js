// 小節を1つ次に進めるボタンを表すクラス
// (enchant.Spriteクラスを継承)
var MeasureNextButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._parent		= null;	// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// ボタンを押せる状態にする
	// </summary>
	_setTouchEnable : function() {
		this.touchEnabled = true;
	},

	// <summary>
	// ボタンを押せない状態にする
	// </summary>
	_setTouchDisable : function() {
		this.touchEnabled = false;
	},

	// <summary>
	// ボタンを不透明状態にする
	// </summary>
	_setOpacity : function() {
		this.opacity = 1.0;
	},

	// <summary>
	// ボタンを半透明状態にする
	// </summary>
	_setTransparent : function() {
		this.opacity = 0.5;
	},

	// <summary>
	// ボタンの全てのステータスを押せる状態に合わせる
	// </summary>
	_setCanPush : function() {
		this._setTouchEnable();
		this._setOpacity();
	},

	// <summary>
	// ボタンの全てのステータスを押せない状態に合わせる
	// </summary>
	_setCannotPush : function() {
		this._setTouchDisable();
		this._setTransparent();
	},

	// <summary>
	// ボタンが押された際の処理
	// </summary>
	ontouchend : function(event) {
		// 小節を1つ次に進めてもらう
		this._parent._score._drawNextScore();
	},

	// <summary>
	// 定期処理
	// </summary>
	onenterframe : function(event) {
		if(this._parent._score._nowPlace === this._parent._score._measureMax - 2) {
			// 現在表示されている小節が最大値の場合はボタンを押せない状態にする
			this._setCannotPush();
		} else {
			// 上記以外の場合は常にボタンを押せる状態にする
			this._setCanPush();
		}

		if(this._parent._playButton._state === "play") {
			// 再生状態の際はボタンを押せない状態にする
			this._setCannotPush();
		}
	},
})