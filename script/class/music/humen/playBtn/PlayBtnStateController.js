var PlayBtnStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNNoteState : function() {
		this._object._setState(new NNotePlayBtnState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new NPPlayBtnState(this._object));
	},
	_setPState : function() {
		this._object._setState(new PPlayBtnState(this._object));
	},
})