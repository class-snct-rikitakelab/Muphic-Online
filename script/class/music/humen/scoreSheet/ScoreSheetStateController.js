var ScoreSheetStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setNPState : function() {
		this._object._setState(new NPScoreSheetState(this._object));
	},
	_setPState : function() {
		this._object._setState(new PScoreSheetState(this._object));
	},
})