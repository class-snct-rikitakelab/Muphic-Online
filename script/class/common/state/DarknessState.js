var DarknessState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._parent._setTouchEnabled(false);
		this._parent._setDarkImage(true);
	},
})