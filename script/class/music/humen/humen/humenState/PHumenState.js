var PHumenState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setTouchEnabled(false);
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {

	},
})