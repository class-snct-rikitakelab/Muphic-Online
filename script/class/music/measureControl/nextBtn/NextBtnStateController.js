var NextBtnStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNNextState : function() {
		this._object._setState(new NNextState(this._object));
	},
	_setHasNextState : function() {
		this._object._setState(new HasNextState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PNextBtnState(this._object));
	},
})