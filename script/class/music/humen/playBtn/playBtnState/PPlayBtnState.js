var PPlayBtnState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
		this._parent._setOnOffImage("off");
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {

	},
})