var SelectPianoState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	_touchEndBehavior : function() {
		alert("piano");
	},

	_frameBehavior : function() {

	},
})