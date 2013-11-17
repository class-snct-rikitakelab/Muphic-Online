var MusicScreenBackgroundStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNonPlayingState : function() {
		this._object._setState(new NonPlayingBackgroundState(this._object));
	},
})