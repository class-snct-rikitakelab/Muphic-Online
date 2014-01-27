var PLAYBUTTON_LEFT_X = 160;
var PLAYBUTTON_RIGHT_X = 270;
var PLAYBUTTON_TOP_Y = 25;
var PLAYBUTTON_BOTTOM_Y = 131;

var NPPlayBtnState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
	},

	_touchEndBehavior : function() {
		this._parent._setPlaying();
	},

	_frameBehavior : function() {
		this._parent._setTouchEnabled(true);
		this._parent._setOpacity(1.0);
		var mOverX = mouseOverX(clientX, PLAYBUTTON_LEFT_X, PLAYBUTTON_RIGHT_X, 0, 0);
		var mOverY = mouseOverY(clientY, PLAYBUTTON_TOP_Y, PLAYBUTTON_BOTTOM_Y, 0, 0);
		if(mOverX && mOverY) {
			this._parent._setOnOffImage("on");
		}　else {
			this._parent._setOnOffImage("off");
		}
		if(this._parent._getNoteCount() === 0) {
			this._parent._setState(new NNotePlayBtnState(this._parent));
		}
	},
})