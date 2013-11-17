var PrevButtonStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonPrevState : function() {
		this._object._setState(new NonPrevState(this._object));
	},
	_setHasPrevState : function() {
		this._object._setState(new HasPrevState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPlayingState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PlayingPrevButtonState(this._object));
	},
})