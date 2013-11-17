var PlayingPrevButtonState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setOnOffImage("off");
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
	},

	_touchEndBehavior : function(oldStartMeasure, newStartMeasure) {

	},

	_frameBehavior : function() {

	},
})