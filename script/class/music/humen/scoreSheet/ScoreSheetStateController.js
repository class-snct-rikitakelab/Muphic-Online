var ScoreSheetStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setNonPlayingState : function() {
		this._object._setState(new NonPlayingScoreSheetState(this._object));
	},
	_setPlayingState : function() {
		this._object._setState(new PlayingScoreSheetState(this._object));
	},
})