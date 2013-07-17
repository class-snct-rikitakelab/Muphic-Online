// 動物ボタンを表すクラス
// (enchant.Spriteクラスを継承)
var AnimalButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._state		= "not put";	// ボタンの状態
		this._pushCount	= 0;			// ボタンが押された回数
		this._parent	= null;			// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// ボタンを「押されている」状態にする
	// </summary>
	_setPut : function() {
		this._state = "put";
	},

	// <summary>
	// ボタンを「押されていない」状態にする
	// </summary>
	_setNotPut : function() {
		this._state = "not put";
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
	// ボタンが「押されている」状態の時の色に変更する
	// </summary>
	_setOnImage : function() {
		this.image = core.assets[ANIMAL_BUTTON_ON];
	},

	// <summary>
	// ボタンが「押されていない」状態の時の色に変更する
	// </summary>
	_setOffImage : function() {
		this.image = core.assets[ANIMAL_BUTTON_OFF];
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
		// 押した回数をインクリメント
		this._pushCount++;

		// ボタンを押すごとに状態を変える
		if(this._pushCount % 2 === 1) {
			this._setPut();
			this._setOnImage();
		} else if(this._pushCount % 2 === 0) {
			this._setNotPut();
			this._setOffImage();
		}
	},

	// <summary>
	// 定期処理
	// </summary>
	onenterframe : function() {
		if(this._parent._humen._playButton._state === "play") {
			// 再生状態の時はボタンを押せない状態に
			this._setCannotPush();
		} else if(this._parent._humen._playButton._state === "not play") {
			// 再生状態でない時はボタンを押せる状態に
			this._setCanPush();
		}
	}
})