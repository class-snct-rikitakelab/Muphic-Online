var HumenStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonSelectState : function() {
		this._object._setState(new NonSelectState(this._object));
	},
	_setSelectPianoState : function() {
		this._object._setState(new SelectPianoState(this._object));
	},
	_setSelectRemoveState : function() {
		this._object._setState(new SelectRemoveState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPlayingState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PlayingHumenState(this._object));
	},
})