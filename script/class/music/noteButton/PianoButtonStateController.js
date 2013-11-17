var PianoButtonStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonPushState : function() {
		this._object._setState(new NonPushPianoState(this._object));
	},
	_setPushState : function() {
		this._object._setState(new PushPianoState(this._object));
	},
	_setSwitchedOffState : function() {
		this._object._setState(new SwitchedOffPianoState(this._object));
	},
	_setSwitchedOnState : function() {
		this._object._setState(new SwitchedOnPianoState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPlayingState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PlayingPianoButtonState(this._object));
	},
})