var NoteStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setFadeOutState : function() {
		this._object._setState(new FadeOutNoteState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new NPNoteState(this._object));
	},
	_setPState : function() {
		this._object._setState(new PNoteState(this._object));
	},
})