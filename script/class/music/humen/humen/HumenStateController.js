var HumenStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNSelectState : function() {
		this._object._setState(new NSelectState(this._object));
	},
	_setSelectPianoState : function() {
		this._object._setState(new SelectPianoState(this._object));
	},
	_setSelectRemoveState : function() {
		this._object._setState(new SelectRemoveState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PHumenState(this._object));
	},
})