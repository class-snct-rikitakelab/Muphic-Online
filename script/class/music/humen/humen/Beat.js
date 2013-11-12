var Beat = enchant.Class.create(MusicSceneGroup, {
	initialize : function(number, parent) {
		MusicSceneGroup.call(this, parent);
		// 以下, このクラスのプロパティ
		this._number = number;
		this._scale = new Array(8);
		this._assignScale();
		this._addScaleToGroup();
	},

	// 音階プロパティを割り当てる
	_assignScale : function() {
		this._scale["C5"] = new Scale("C5", this);
		this._scale["B4"] = new Scale("B4", this);
		this._scale["A4"] = new Scale("A4", this);
		this._scale["G4"] = new Scale("G4", this);
		this._scale["F4"] = new Scale("F4", this);
		this._scale["E4"] = new Scale("E4", this);
		this._scale["D4"] = new Scale("D4", this);
		this._scale["C4"] = new Scale("C4", this);
	},
	// 音階プロパティを自分自身へ子ノードとして追加
	_addScaleToGroup : function() {
		this._addToGroup(this._scale["C5"]);
		this._addToGroup(this._scale["B4"]);
		this._addToGroup(this._scale["A4"]);
		this._addToGroup(this._scale["G4"]);
		this._addToGroup(this._scale["F4"]);
		this._addToGroup(this._scale["E4"]);
		this._addToGroup(this._scale["D4"]);
		this._addToGroup(this._scale["C4"]);
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._scale[scale]._createNote(animal, measure, beat, scale);
	},
})