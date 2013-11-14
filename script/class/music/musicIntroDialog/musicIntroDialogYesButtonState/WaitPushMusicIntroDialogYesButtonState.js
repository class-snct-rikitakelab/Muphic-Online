var WaitPushMusicIntroDialogYesButtonState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function() {
		this._parent._removeDialog();
	},

	_frameBehavior : function() {
		var leftX = INTRODIALOG_X + YESBUTTON_X;
		var rightX = leftX + this._parent.width;
		var topY = INTRODIALOG_Y + YESBUTTON_Y;
		var bottomY = topY + this._parent.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._parent._setOnOffImage("on");
		} else {
			this._parent._setOnOffImage("off");
		}
	},
})