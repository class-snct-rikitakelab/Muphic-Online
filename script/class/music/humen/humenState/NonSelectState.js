var NonSelectState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	_touchEndBehavior : function() {
		alert("non");
	},

	_frameBehavior : function() {

	},
})