var Note = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, measure, beat, scale, sound, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		this._setTouchEnabled(false);
		// 以下, このクラスのプロパティ
		this._homeX = x;
		this._homeY = y;
		this._measure = measure;
		this._beat = beat;
		this._scale = scale;
		this._sound = sound;
		this._voice = null;
		this._state = new NonPlayingNoteState(this);
		// 初期化メソッド
		this._assignVoice();
	},

	// 音色を指定
	_assignVoice : function() {
		this._voice = new Audio();
		this._voice.src = this._sound;
	},
	// 音色を再生
	_play : function() {
		this._voice.play();
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
	// 非再生ステートセッタ
	_setNonPlayingNoteState : function() {
		this._setState(new NonPlayingNoteState(this));
	},
	// 再生ステートセッタ
	_setPlayingNoteState : function() {
		this._setState(new PlayingNoteState(this));
	},
	// フェードアウトステートセッタ
	_setFadeOutNoteState : function() {
		this._setState(new FadeOutNoteState(this));
	},
})