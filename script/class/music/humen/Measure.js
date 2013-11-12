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
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(beat, scale) {
		var isExist = false;
		for(var i = 0; i < this._note.length; i++) {
			var equalBeat = this._equalBeat(beat, this._note[i]._beat);
			var equalScale = this._equalScale(scale, this._note[i]._scale);
			if(equalBeat && equalScale) {
				isExist = true;
				break;
			}
		}
		return isExist;
	},

	// 引数の拍同士が等しいか
	_equalBeat : function(beat1, beat2) {
		if(beat1 === beat2) {
			return true;
		} else {
			return false;
		}
	},
	// 引数の音階同士が等しいか
	_equalScale : function(scale1, scale2) {
		if(scale1 === scale2) {
			return true;
		} else {
			return false;
		}
	},
})