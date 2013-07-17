// 再生ボタンを表すクラス
// (enchant.Spriteクラスを継承)
var PlayButton = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._state		= "not play";	// ボタンの状態
		this._parent	= null;			// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 再生状態にする
	// </summary>
	_setPlay : function() {
		this._state = "play";
	},

	// <summary>
	// 非再生状態にする
	// </summary>
	_setNotPlay : function() {
		this._state = "not play";
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
	// ボタンの全てのステータスを再生状態に合わせる
	// </summary>
	_setDoingPlay : function() {
		this._setPlay();
		this._setTouchDisable();
		this._setTransparent();
	},

	// <summary>
	// ボタンの全てのステータスを再生可能(待機)状態に合わせる
	// </summary>
	_setCanPlay : function() {
		this._setNotPlay();
		this._setTouchEnable();
		this._setOpacity();
	},

	// <summary>
	// ボタンが押された際の処理
	// </summary>
	ontouchend : function(event) {
		// 動物が一匹も譜面上にいない場合はreturnして終了
		if(this._parent._animalsCount === 0) {
			return;
		}

		// 再生状態にセット
		this._setDoingPlay();

		// すべての動物のx座標値とy座標値をそれぞれ絶対的な数値にセットし直す
		this._parent._score._allNotesMoveAbsolutePoint();
		// すべての動物を表示状態にする
		this._parent._score._allNotesVisible();
		// 1小節目から表示するよう_nowPlaceプロパティに1を与える
		this._parent._score._nowPlace = 1;
		// 譜面の再描画
		this._parent._score._drawScore();
		// サインボードの再描画
		this._parent._score._initializeSignboards();
		// _scoreプロパティに再生状態となったことを伝える
		this._parent._score._setIsPlay(true);
	},
})