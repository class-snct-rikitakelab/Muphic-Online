var Scale = enchant.Class.create(MusicSceneGroup, {
	initialize : function(scale, parent) {
		MusicSceneGroup.call(this, parent);
		// 以下, このクラスのプロパティ
		this._scale = scale;
		this._note = null;
	},

	// 音符プロパティを自分自身へ子ノードとして追加
	_addNoteToGroup : function() {
		this._addToGroup(this._note);
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		var path = MUSIC_ANIMAL[animal]._path;
		var width = MUSIC_ANIMAL[animal]._width;
		var height = MUSIC_ANIMAL[animal]._height;
		var x = beatToX[beat] + MEASURE_WIDTH * (measure - 1);
		var y = scaleToY[scale];
		var sound = scaleToSound[scale];
		this._note = new Note(path, width, height, x, y, measure, beat, scale, sound, this);
		this._note._addToMusicScene();
		this._addNoteToGroup();
	},
})