var Scale = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(scale, x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._scale = scale;
		this._note = null;
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		var path = MUSIC_ANIMAL[animal]._path;
		var width = MUSIC_ANIMAL[animal]._width;
		var height = MUSIC_ANIMAL[animal]._height;
		var sound = scaleToSound[scale];
		this._note = new Note(path, width, height, 0, 0, measure, beat, scale, sound, this);
		this._note._play();
		this._addToGroup(this._note);
	},
	// 音符を破棄
	_destroyNote : function() {
		this._removeFromGroup(this._note);
		this._note = null;
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function() {
		if(this._note === null) {
			return false;
		} else {
			return true;
		}
	},

	// 音符への再生ステートセッタ
	_setPlayingNoteState : function() {
		if(this._note !== null) {
			this._note._setPlayingNoteState();
		}
	},
	// 音符への非再生ステートセッタ
	_setNonPlayingNoteState : function() {
		if(this._note !== null) {
			this._note._setNonPlayingNoteState();
			this._note._setX(this._note._homeX);
			this._note._setY(this._note._homeY);
			this._note._setOpacity(1.0);
			this._note._setVisible(true);
		}
	},
})