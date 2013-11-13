var PlayButton = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._state = new NonNotePlayButtonState(this);
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_PLAYBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_PLAYBUTTON_OFF._path];
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

	// 各種ステートセッタ
	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},
	// 音符なしステートセッタ
	_setNonNotePlayButtonState : function() {
		this._setState(new NonNotePlayButtonState(this));
	},
	// 非再生ステートセッタ
	_setNonPlayingPlayButtonState : function() {
		this._setState(new NonPlayingPlayButtonState(this));
	},
	// 再生ステートセッタ
	_setPlayingPlayButtonState : function() {
		this._setState(new PlayingPlayButtonState(this));
	},

	// 親メソッド
	_getNoteCount : function() {
		return this._parent._getNoteCount();
	},

	_setPlaying : function() {
		this._parent._setPlaying();
	},
})