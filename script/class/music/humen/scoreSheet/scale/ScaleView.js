var ScaleView = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		this._note = null;
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		var path = MUSIC_ANIMAL[animal]._path;
		var width = MUSIC_ANIMAL[animal]._width;
		var height = MUSIC_ANIMAL[animal]._height;
		this._note = new Note(path, width, height, null, null, animal, measure, beat, scale, this);
		this._addToGroup(this._note._getView());
	},
	// 音符を破棄
	_destroyNote : function() {
		this._removeFromGroup(this._note._getView());
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
	_setPNoteState : function() {
		if(this._note !== null) {
			this._note._setPState();
		}
	},
	// 音符への非再生ステートセッタ
	_setNPNoteState : function() {
		if(this._note !== null) {
			this._note._setNPState();
		}
	},
})