var MusicSaveBtnView = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		this._addToMusicScene();
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_SAVEBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_SAVEBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_SAVEBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[MUSIC_SAVEBUTTON_OFF._path];
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
	_saveMusicNote : function() {
		this._parent._saveMusicNote();
	},
})