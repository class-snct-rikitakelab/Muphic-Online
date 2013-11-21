var NPrevState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setOnOffImage("off");
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
	},

	_touchEndBehavior : function(oldStartMeasure, newStartMeasure) {
		this._parent._setStartMeasure(newStartMeasure);
		this._parent._setMeasureNumber(newStartMeasure, newStartMeasure + 1, newStartMeasure + 2);
		this._parent._scrollScoreSheetPrev(1);
		this._parent._removeMeasureNote(oldStartMeasure + 2);
		this._parent._addMeasureNote(newStartMeasure);
		var hasNextMeasure = this._parent._checkHasNextMeasure();
		this._parent._setNextBtnState(hasNextMeasure);
		var hasPrevMeasure = this._parent._checkHasPrevMeasure();
		this._parent._setPrevBtnState(hasPrevMeasure);
	},

	_frameBehavior : function() {

	},
})