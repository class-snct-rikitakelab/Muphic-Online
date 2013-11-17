var NextButtonStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonNextState : function() {
		this._object._setState(new NonNextState(this._object));
	},
	_setHasNextState : function() {
		this._object._setState(new HasNextState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPlayingState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PlayingNextButtonState(this._object));
	},
})