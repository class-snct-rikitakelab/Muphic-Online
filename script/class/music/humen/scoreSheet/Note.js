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
		// 初期化メソッド
		this._play();
		this._setTouchEnabled(false);
	},

	// 音色を再生
	_play : function() {
		// 再生中でない音声ファイルを探す
		for(var i = 0; i < 4; i++) {
			// 再生中でない音声ファイルが見つかったら
			if(!PIANO[this._scale][i]._isPlaying) {
				// 状態を再生中にして
				PIANO[this._scale][i]._isPlaying = true;
				// 音声を再生
				core.assets[PIANO[this._scale][i]._path].play();
				// 一定時間後に再生状態をリセット
				var self = this;
				setTimeout(function() {
					PIANO[self._scale][i]._isPlaying = false;
				}, 1000);
				// 探すの終了
				break;
			}
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
})