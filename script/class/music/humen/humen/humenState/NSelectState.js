var NSelectState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setDarkImage(false);
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {

	},
})