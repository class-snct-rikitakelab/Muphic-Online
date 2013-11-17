var PlayButtonStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonNoteState : function() {
		this._object._setState(new NonNotePlayButtonState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new NonPlayingPlayButtonState(this._object));
	},
	_setPlayingState : function() {
		this._object._setState(new PlayingPlayButtonState(this._object));
	},
})