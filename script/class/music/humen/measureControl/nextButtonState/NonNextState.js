var NonNextState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	// オーバーライドメソッド
	_stateBehavior : function() {
		this._parent._setOnOffImage("off");
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
	},
})