var BEAT_MAX = 4;
var BEAT_WIDTH = 60;

var Measure = enchant.Class.create(MusicSceneGroup, {
	initialize : function(number, x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._number = number;
		this._beat = new Array(BEAT_MAX);
		this._noteCount = 0;
		// 初期化メソッド
		this._assignBeat();
		this._addBeatToGroup();
	},

	// 拍プロパティを割り当てる
	_assignBeat : function() {
		for(var number = 1; number <= this._beat.length; number++) {
			var x = BEAT_WIDTH * (number - 1);
			var y = 0;
			this._beat[number - 1] = new Beat(number, x, y, this);
		}
	},
	// 拍プロパティを自分自身へ子ノードとして追加
	_addBeatToGroup : function() {
		for(var number = 1; number <= this._beat.length; number++) {
			this._addToGroup(this._beat[number - 1]);
		}
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._beat[beat - 1]._createNote(animal, measure, beat, scale);
		this._noteCount++;
	},
	// 音符を破棄
	_destroyNote : function(beat, scale) {
		this._beat[beat - 1]._destroyNote(scale);
		this._noteCount--;
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(beat, scale) {
		return this._beat[beat - 1]._checkNote(scale);
	},

	// 子メソッド
	// 音符への再生ステートセッタ
	_setPNoteState : function() {
		for(var number = 1; number <= this._beat.length; number++) {
			this._beat[number - 1]._setPNoteState();
		}
	},
	// 音符への再生ステートセッタ
	_setNPNoteState : function() {
		for(var number = 1; number <= this._beat.length; number++) {
			this._beat[number - 1]._setNPNoteState();
		}
	},
})