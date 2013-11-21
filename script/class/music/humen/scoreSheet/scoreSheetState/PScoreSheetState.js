var PScoreSheetState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 以下, このクラスのプロパティ
		this._moveDistance = 0;
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._parent.x -= SPEED;
		this._moveDistance += SPEED;
		if(this._moveDistance >= MEASURE_WIDTH * this._parent._lastMeasure + BEAT_WIDTH) {
			this._parent._setPlayed();
		}
	},
})