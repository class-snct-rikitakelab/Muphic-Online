var SwitchedOnRemoveState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function(otherButton) {
		this._parent._setIsPush(true);
		this._parent._setState(new SwitchedOffRemoveState(this._parent));
		this._parent._setNonSelectState();
		otherButton._setIsPush(false);
		otherButton._setState(new NonPushPianoState(otherButton));
	},

	_frameBehavior : function() {
		this._parent._setTouchEnabled(true);
		this._parent._setOpacity(1.0);
		var leftX = this._parent.x;
		var rightX = this._parent.x + this._parent.width;
		var topY = this._parent.y;
		var bottomY = this._parent.y + this._parent.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._parent._setPushImage("push");
		} else {
			this._parent._setState(new PushRemoveState(this._parent));
		}
	},
})