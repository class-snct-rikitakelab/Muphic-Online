var HasNextState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	// オーバーライドメソッド
	_stateBehavior : function() {
		this._parent._setTouchEnabled(true);
		this._parent._setOpacity(1.0);
		var leftX = this._parent.x;
		var rightX = this._parent.x + this._parent.width;
		var topY = this._parent.y;
		var bottomY = this._parent.y + this._parent.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._parent._setOnOffImage("on");
		} else {
			this._parent._setOnOffImage("off");
		}
	},
})