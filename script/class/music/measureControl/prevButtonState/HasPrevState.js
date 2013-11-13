var HasPrevState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function(oldStartMeasure, newStartMeasure) {
		this._parent._setStartMeasure(newStartMeasure);
		this._parent._setMeasureNumber(newStartMeasure, newStartMeasure + 1, newStartMeasure + 2);
		this._parent._scrollScoreSheetPrev(1);
		this._parent._removeMeasureNote(oldStartMeasure + 2);
		this._parent._addMeasureNote(newStartMeasure);
		var hasNextMeasure = this._parent._checkHasNextMeasure();
		this._parent._setNextButtonState(hasNextMeasure);
		var hasPrevMeasure = this._parent._checkHasPrevMeasure();
		this._parent._setPrevButtonState(hasPrevMeasure);
	},

	_frameBehavior : function() {
		this._parent._setTouchEnabled(true);
		this._parent._setOpacity(1.0);
		var leftX = this._parent.x;
		var rightX = this._parent.x + this._parent.width;
		var topY = this._parent.y;
		var bottomY = this._parent.y + this._parent.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._parent._setOnOffImage("on");
		} else {
			this._parent._setOnOffImage("off");
		}
	},
})