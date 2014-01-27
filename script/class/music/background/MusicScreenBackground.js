var MusicScreenBackground = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
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
})