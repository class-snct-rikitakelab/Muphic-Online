var NonSelectState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._parent._setDarkImage(false);
	},
})