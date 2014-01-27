var Scale = enchant.Class.create({
	// コンストラクタ
	initialize : function(scale, x, y, parent) {
		this._model = new ScaleModel(scale, this);
		this._view = new ScaleView(x, y, this);
		this._parent = parent;
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._view._createNote(animal, measure, beat, scale);
	},
	// 音符を破棄
	_destroyNote : function() {
		this._view._destroyNote();
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function() {
		return this._view._checkNote();
	},

	// 音符への再生ステートセッタ
	_setPNoteState : function() {
		this._view._setPNoteState();
	},
	// 音符への非再生ステートセッタ
	_setNPNoteState : function() {
		this._view._setNPNoteState();
	},

	// ゲッタ
	_getModel : function() {
		return this._model;
	},
	_getView : function() {
		return this._view;
	},
})