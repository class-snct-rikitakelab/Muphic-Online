var SCALE_MAX = 8;

var Beat = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(number, x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._number = number;
		this._scale = new Array(SCALE_MAX);
		// 初期化メソッド
		this._assignScale();
		this._addScaleToGroup();
	},

	// 音階プロパティを割り当てる
	_assignScale : function() {
		this._scale["C5"] = new Scale("C5", 0, scaleToY["C5"], this);
		this._scale["B4"] = new Scale("B4", 0, scaleToY["B4"], this);
		this._scale["A4"] = new Scale("A4", 0, scaleToY["A4"], this);
		this._scale["G4"] = new Scale("G4", 0, scaleToY["G4"], this);
		this._scale["F4"] = new Scale("F4", 0, scaleToY["F4"], this);
		this._scale["E4"] = new Scale("E4", 0, scaleToY["E4"], this);
		this._scale["D4"] = new Scale("D4", 0, scaleToY["D4"], this);
		this._scale["C4"] = new Scale("C4", 0, scaleToY["C4"], this);
	},
	// 小節プロパティを自分自身へ子ノードとして追加
	_addScaleToGroup : function() {
		this._addToGroup(this._scale["C5"]._getView());
		this._addToGroup(this._scale["B4"]._getView());
		this._addToGroup(this._scale["A4"]._getView());
		this._addToGroup(this._scale["G4"]._getView());
		this._addToGroup(this._scale["F4"]._getView());
		this._addToGroup(this._scale["E4"]._getView());
		this._addToGroup(this._scale["D4"]._getView());
		this._addToGroup(this._scale["C4"]._getView());
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._scale[scale]._createNote(animal, measure, beat, scale);
	},
	// 音符を破棄
	_destroyNote : function(scale) {
		this._scale[scale]._destroyNote();
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(scale) {
		return this._scale[scale]._checkNote();
	},

	// 子メソッド
	// 音符への再生ステートセッタ
	_setPNoteState : function() {
		this._scale["C5"]._setPNoteState();
		this._scale["B4"]._setPNoteState();
		this._scale["A4"]._setPNoteState();
		this._scale["G4"]._setPNoteState();
		this._scale["F4"]._setPNoteState();
		this._scale["E4"]._setPNoteState();
		this._scale["D4"]._setPNoteState();
		this._scale["C4"]._setPNoteState();
	},
	// 音符への非再生ステートセッタ
	_setNPNoteState : function() {
		this._scale["C5"]._setNPNoteState();
		this._scale["B4"]._setNPNoteState();
		this._scale["A4"]._setNPNoteState();
		this._scale["G4"]._setNPNoteState();
		this._scale["F4"]._setNPNoteState();
		this._scale["E4"]._setNPNoteState();
		this._scale["D4"]._setNPNoteState();
		this._scale["C4"]._setNPNoteState();
	},
})