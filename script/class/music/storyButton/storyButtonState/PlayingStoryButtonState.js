var PlayingStoryButtonState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
		this._parent._setOnOffImage("off");
	},
})