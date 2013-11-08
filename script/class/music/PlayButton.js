// 再生ボタンを表すクラス
// (enchant.Spriteクラスを継承)
var PlayButton = enchant.Class.create(enchant.Sprite, {
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

	// ボタンの全てのステータスを再生状態に合わせる
	_setDoingPlay : function() {
		this._setIsPush(true);
		this._setTouchDisable();
		this._setTransparent();
	},

	// ボタンの全てのステータスを再生可能(待機)状態に合わせる
	_setCanPlay : function() {
		this._setIsPush(false);
		this._setTouchEnable();
		this._setOpacity();
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
		// すべての動物の「歌ったフラグ」をリセット
		this._parent._resetIsSang();
		// 再生状態にセット
		this._setDoingPlay();

		// すべての動物のx座標値とy座標値をそれぞれ絶対的な数値にセットし直す
		this._parent._allAnimalsMoveAbsolutePoint();
		// 1小節目から表示するよう_nowPlaceプロパティに1を与える
		this._parent._setNowPlace(1);
		// 譜面の再描画
		this._parent._drawScore();
		// サインボードの再描画
		this._parent._initializeSignboards();
	},

	// 定期処理
	onenterframe : function(event) {
		var canPlay = this._isPush;
		var animalsCount = this._parent._getAnimalsCount();

		if(canPlay === false) {
			if(animalsCount === 0) {
				this._setCannotPush();
			} else if(animalsCount >= 1) {
				this._setCanPush();
			}
		}
	},
})