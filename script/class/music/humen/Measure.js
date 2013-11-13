var NOTE_MAX = 32;

var Measure = enchant.Class.create(MusicSceneGroup, {
	initialize : function(number, x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._number = number;
		this._note = new Array();
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		var path = MUSIC_ANIMAL[animal]._path;
		var width = MUSIC_ANIMAL[animal]._width;
		var height = MUSIC_ANIMAL[animal]._height;
		var x = beatToX[beat];
		var y = scaleToY[scale];
		var sound = scaleToSound[scale];
		var index = this._note.length;
		this._note.push(new Note(path, width, height, x, y, index, measure, beat, scale, sound, this));
		this._addToGroup(this._note[index]);
	},
	// 音符を破棄
	_destroyNote : function(beat, scale) {
		for(var i = 0; i < this._note.length; i++) {
			var index = i;
			var eBeat = equalBeat(beat, this._note[index]._beat);
			var eScale = equalScale(scale, this._note[index]._scale);
			if(eBeat && eScale) {
				this._removeFromGroup(this._note[index]);
				this._spliceNote(index);
				break;
			}
		}
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(beat, scale) {
		var isExist = false;
		for(var i = 0; i < this._note.length; i++) {
			var eBeat = equalBeat(beat, this._note[i]._beat);
			var eScale = equalScale(scale, this._note[i]._scale);
			if(eBeat && eScale) {
				isExist = true;
				break;
			}
		}
		return isExist;
	},
	// 引数のインデックスの音符を詰める
	_spliceNote : function(index) {
		for(var i = index + 1; i < this._note.length; i++) {
			this._note[i]._setIndex(i - 1);
		}
		this._note.splice(index, 1);
	},
})