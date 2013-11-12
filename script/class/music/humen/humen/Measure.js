var Measure = enchant.Class.create(MusicSceneGroup, {
	initialize : function(number, parent) {
		MusicSceneGroup.call(this, parent);
		// 以下, このクラスのプロパティ
		this._number = number;
		this._beat = new Array(4);
		this._assignBeat();
		this._addBeatToGroup();
	},

	// 拍プロパティを割り当てる
	_assignBeat : function() {
		for(var i = 0; i < this._beat.length; i++) {
			this._beat[i] = new Beat(i + 1, this);
		}
	},
	// 拍プロパティを自分自身へ子ノードとして追加
	_addBeatToGroup : function() {
		for(var i = 0; i < this._beat.length; i++) {
			this._addToGroup(this._beat[i]);
		}
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._beat[beat - 1]._createNote(animal, measure, beat, scale);
	},
})