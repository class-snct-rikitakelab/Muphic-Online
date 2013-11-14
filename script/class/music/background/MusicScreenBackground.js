var MusicScreenBackground = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._state = new DarknessState(this);
	},

	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_BACKGROUND_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[MUSIC_BACKGROUND._path];
		}
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 各種ステートセッタ
	_setState : function(state) {
		this._state = state;
	},
	_setNonPlayingBackgroundState : function() {
		this._setState(new NonPlayingBackgroundState(this));
	},
})