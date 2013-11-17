var Note = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, measure, beat, scale, sound, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._homeX = x;
		this._homeY = y;
		this._measure = measure;
		this._beat = beat;
		this._scale = scale;
		this._sound = sound;
		this._voice = null;
		// 初期化メソッド
		this._setTouchEnabled(false);
		this._assignVoice();
	},

	// 音色を指定
	_assignVoice : function() {
		this._voice = core.assets[this._sound].clone();
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
})