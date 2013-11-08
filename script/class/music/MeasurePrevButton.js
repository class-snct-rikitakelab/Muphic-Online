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
			this._setCannotPush();
		} else {
			// 上記以外の場合は常にボタンを押せる状態にする
			this._setCanPush();
		}

		if(canPlay === true) {
			// 再生状態の際はボタンを押せない状態にする
			this._setCannotPush();
		}
	},
})