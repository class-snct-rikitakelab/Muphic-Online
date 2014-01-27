var NoteView = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		this._homeX = x;
		this._homeY = y;
		this._play();
	},

	// 音色を再生
	_play : function() {
		var scale = this._getScale();
		for(var fileIndex = 0; fileIndex < 4; fileIndex++) {
			if(this._searchNonPlayingFile(scale, fileIndex)) {
				return fileIndex;
			}
		}
	},
	// 再生中でない音声ファイルを探す
	_searchNonPlayingFile : function(scale, fileIndex) {
		// 再生中でない音声ファイルが見つかったら
		if(!PIANO[scale][fileIndex]._isPlaying) {
			this._changeFileStatePlaying(scale, fileIndex);
			this._playFile(scale, fileIndex);
			this._resetFileState(scale, fileIndex, 1000);
			return true;
		} else {
			return false;
		}
	},
	// 音声ファイルの状態を再生中にする
	_changeFileStatePlaying : function(scale, fileIndex) {
		PIANO[scale][fileIndex]._isPlaying = true;
	},
	// 音声ファイルの状態を非再生中にする
	_changeFileStateNonPlaying : function(scale, fileIndex) {
		PIANO[scale][fileIndex]._isPlaying = false;
	},
	// 一定時間後に再生状態をリセット
	_resetFileState : function(scale, fileIndex, msec) {
		// 一定時間後に再生状態をリセット
		var self = this;
		setTimeout(function() {
			self._changeFileStateNonPlaying(scale, fileIndex);
		}, msec);
	},
	// 音声ファイルを再生する
	_playFile : function(scale, fileIndex) {
		core.assets[PIANO[scale][fileIndex]._path].play();
	},

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},
	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// ゲッタ
	_getHomeX : function() {
		return this._homeX;
	},
	_getHomeY : function() {
		return this._homeY;
	},
	_getMeasure : function() {
		return this._parent._getMeasure();
	},
	_getBeat : function() {
		return this._parent._getBeat();
	},
	_getScale : function() {
		return this._parent._getScale();
	},
})