var MusicIntroDialogYesButton = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._state = new WaitPushMusicIntroDialogYesButtonState(this);
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_YESBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_YESBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 親メソッド
	// ダイアログ全体を消す
	_removeDialog : function() {
		this._parent._removeFromMusicScene();
	},
	_setRemoveDialog : function() {
		this._parent._setRemoveDialog();
	},
})