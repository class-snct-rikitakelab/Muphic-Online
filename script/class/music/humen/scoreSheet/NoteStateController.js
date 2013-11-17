var NoteStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setFadeOutState : function() {
		this._object._setState(new FadeOutNoteState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new NonPlayingNoteState(this._object));
	},
	_setPlayingState : function() {
		this._object._setState(new PlayingNoteState(this._object));
	},
})