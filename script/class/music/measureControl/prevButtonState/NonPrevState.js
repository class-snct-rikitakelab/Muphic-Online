var NonPrevState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function(oldStartMeasure, newStartMeasure) {
		this._parent._setStartMeasure(newStartMeasure);
		this._parent._setMeasureNumber(newStartMeasure, newStartMeasure + 1, newStartMeasure + 2);
		this._parent._scrollScoreSheetPrev();
		this._parent._removeMeasureNote(oldStartMeasure + 2);
		this._parent._addMeasureNote(newStartMeasure);
		var hasNextMeasure = this._parent._checkHasNextMeasure();
		this._parent._setNextButtonState(hasNextMeasure);
		var hasPrevMeasure = this._parent._checkHasPrevMeasure();
		this._parent._setPrevButtonState(hasPrevMeasure);
	},

	_frameBehavior : function() {
		this._parent._setOnOffImage("off");
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
	},
})